﻿using System;
using System.Linq;
using Marr.Data.QGen;
using NzbDrone.Core.Datastore;
using System.Collections.Generic;
using NzbDrone.Core.Messaging.Events;

namespace NzbDrone.Core.Music
{
    public interface IAlbumRepository : IBasicRepository<Album>
    {
        bool AlbumPathExists(string path);
        List<Album> GetAlbums(int artistId);
        Album FindByName(string cleanTitle);
        Album FindById(string spotifyId);
        List<Album> AlbumsBetweenDates(DateTime startDate, DateTime endDate, bool includeUnmonitored);
        void SetMonitoredFlat(Album album, bool monitored);
    }

    public class AlbumRepository : BasicRepository<Album>, IAlbumRepository
    {
        public AlbumRepository(IMainDatabase database, IEventAggregator eventAggregator)
            : base(database, eventAggregator)
        {
        }
       

        public bool AlbumPathExists(string path)
        {
            return Query.Where(c => c.Path == path).Any();
        }
        public List<Album> GetAlbums(int artistId)
        {
            return Query.Where(s => s.ArtistId == artistId).ToList();
        }

        public Album FindById(string foreignAlbumId)
        {
            return Query.Where(s => s.ForeignAlbumId == foreignAlbumId).SingleOrDefault();
        }

        public List<Album> AlbumsBetweenDates(DateTime startDate, DateTime endDate, bool includeUnmonitored)
        {
            var query = Query.Join<Album, Artist>(JoinType.Inner, e => e.Artist, (e, s) => e.ArtistId == s.Id)
                             .Where<Album>(e => e.ReleaseDate >= startDate)
                             .AndWhere(e => e.ReleaseDate <= endDate);


            if (!includeUnmonitored)
            {
                query.AndWhere(e => e.Monitored)
                     .AndWhere(e => e.Artist.Monitored);
            }

            return query.ToList();
        }

        public void SetMonitoredFlat(Album album, bool monitored)
        {
            album.Monitored = monitored;
            SetFields(album, p => p.Monitored);
        }

        public Album FindByName(string cleanTitle)
        {
            cleanTitle = cleanTitle.ToLowerInvariant();

            return Query.Where(s => s.CleanTitle == cleanTitle)
                        .SingleOrDefault();
        }
    }
}