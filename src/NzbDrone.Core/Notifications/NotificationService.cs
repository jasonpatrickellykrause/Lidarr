using System;
using System.Collections.Generic;
using System.Linq;
using NLog;
using NzbDrone.Common.Extensions;
using NzbDrone.Core.Download;
using NzbDrone.Core.MediaFiles.Events;
using NzbDrone.Core.Messaging.Events;
using NzbDrone.Core.Qualities;
using NzbDrone.Core.ThingiProvider;
using NzbDrone.Core.Music;

namespace NzbDrone.Core.Notifications
{
    public class NotificationService
        : IHandle<AlbumGrabbedEvent>,
          IHandle<TrackDownloadedEvent>,
          IHandle<ArtistRenamedEvent>
    {
        private readonly INotificationFactory _notificationFactory;
        private readonly Logger _logger;

        public NotificationService(INotificationFactory notificationFactory, Logger logger)
        {
            _notificationFactory = notificationFactory;
            _logger = logger;
        }

        private string GetMessage(Artist artist, List<Album> albums, QualityModel quality)
        {
            var qualityString = quality.Quality.ToString();

            if (quality.Revision.Version > 1)
            {
                qualityString += " Proper";
            }


            var albumTitles = string.Join(" + ", albums.Select(e => e.Title));

            return string.Format("{0} - {1} - [{2}]",
                                    artist.Name,
                                    albumTitles,
                                    qualityString);
        }

        private string GetTrackMessage(Artist artist, List<Track> tracks, QualityModel quality)
        {
            var qualityString = quality.Quality.ToString();

            if (quality.Revision.Version > 1)
            {
                qualityString += " Proper";
            }


            var trackTitles = string.Join(" + ", tracks.Select(e => e.Title));

            return string.Format("{0} - {1} - [{2}]",
                                    artist.Name,
                                    trackTitles,
                                    qualityString);
        }

        private bool ShouldHandleArtist(ProviderDefinition definition, Artist artist)
        {
            if (definition.Tags.Empty())
            {
                _logger.Debug("No tags set for this notification.");
                return true;
            }

            if (definition.Tags.Intersect(artist.Tags).Any())
            {
                _logger.Debug("Notification and artist have one or more intersecting tags.");
                return true;
            }

            //TODO: this message could be more clear
            _logger.Debug("{0} does not have any intersecting tags with {1}. Notification will not be sent.", definition.Name, artist.Name);
            return false;
        }

        public void Handle(AlbumGrabbedEvent message)
        {
            var grabMessage = new GrabMessage
            {
                Message = GetMessage(message.Album.Artist, message.Album.Albums, message.Album.ParsedAlbumInfo.Quality),
                Artist = message.Album.Artist,
                Quality = message.Album.ParsedAlbumInfo.Quality,
                Album = message.Album
            };

            foreach (var notification in _notificationFactory.OnGrabEnabled())
            {
                try
                {
                    if (!ShouldHandleArtist(notification.Definition, message.Album.Artist)) continue;
                    notification.OnGrab(grabMessage);
                }

                catch (Exception ex)
                {
                    _logger.Error(ex, "Unable to send OnGrab notification to {0}", notification.Definition.Name);
                }
            }
        }

        public void Handle(TrackDownloadedEvent message)
        {
            var downloadMessage = new DownloadMessage();
            downloadMessage.Message = GetTrackMessage(message.Track.Artist, message.Track.Tracks, message.Track.Quality);
            downloadMessage.Artist = message.Track.Artist;
            downloadMessage.TrackFile = message.TrackFile;
            downloadMessage.OldFiles = message.OldFiles;
            downloadMessage.SourcePath = message.Track.Path;

            foreach (var notification in _notificationFactory.OnDownloadEnabled())
            {
                try
                {
                    if (ShouldHandleArtist(notification.Definition, message.Track.Artist))
                    {
                        if (downloadMessage.OldFiles.Empty() || ((NotificationDefinition)notification.Definition).OnUpgrade)
                        {
                            notification.OnDownload(downloadMessage);
                        }
                    }
                }

                catch (Exception ex)
                {
                    _logger.Warn(ex, "Unable to send OnDownload notification to: " + notification.Definition.Name);
                }
            }
        }

        public void Handle(ArtistRenamedEvent message)
        {
            foreach (var notification in _notificationFactory.OnRenameEnabled())
            {
                try
                {
                    if (ShouldHandleArtist(notification.Definition, message.Artist))
                    {
                        notification.OnRename(message.Artist);
                    }
                }

                catch (Exception ex)
                {
                    _logger.Warn(ex, "Unable to send OnRename notification to: " + notification.Definition.Name);
                }
            }
        }
    }
}
