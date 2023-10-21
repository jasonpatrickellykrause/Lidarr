import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Alert from 'Components/Alert';
import LoadingIndicator from 'Components/Loading/LoadingIndicator';
import PageContent from 'Components/Page/PageContent';
import PageContentBody from 'Components/Page/PageContentBody';
import PageToolbar from 'Components/Page/Toolbar/PageToolbar';
import PageToolbarButton from 'Components/Page/Toolbar/PageToolbarButton';
import PageToolbarSection from 'Components/Page/Toolbar/PageToolbarSection';
import PageToolbarSeparator from 'Components/Page/Toolbar/PageToolbarSeparator';
import Table from 'Components/Table/Table';
import TableBody from 'Components/Table/TableBody';
import TableOptionsModalWrapper from 'Components/Table/TableOptions/TableOptionsModalWrapper';
import TablePager from 'Components/Table/TablePager';
import { align, icons, kinds } from 'Helpers/Props';
import getRemovedItems from 'Utilities/Object/getRemovedItems';
import hasDifferentItems from 'Utilities/Object/hasDifferentItems';
import translate from 'Utilities/String/translate';
import getSelectedIds from 'Utilities/Table/getSelectedIds';
import removeOldSelectedState from 'Utilities/Table/removeOldSelectedState';
import selectAll from 'Utilities/Table/selectAll';
import toggleSelected from 'Utilities/Table/toggleSelected';
import QueueOptionsConnector from './QueueOptionsConnector';
import QueueRowConnector from './QueueRowConnector';
import RemoveQueueItemsModal from './RemoveQueueItemsModal';

class Queue extends Component {

  //
  // Lifecycle

  constructor(props, context) {
    super(props, context);

    this._shouldBlockRefresh = false;

    this.state = {
      allSelected: false,
      allUnselected: false,
      lastToggled: null,
      selectedState: {},
      isPendingSelected: false,
      isConfirmRemoveModalOpen: false,
      items: props.items
    };
  }

  shouldComponentUpdate() {
    if (this._shouldBlockRefresh) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps) {
    const {
      items,
      isFetching,
      isAlbumsFetching
    } = this.props;

    if (
      (!isAlbumsFetching && prevProps.isAlbumsFetching) ||
      (!isFetching && prevProps.isFetching) ||
      (hasDifferentItems(prevProps.items, items) && !items.some((e) => e.albumId))
    ) {
      this.setState((state) => {
        return {
          ...removeOldSelectedState(state, getRemovedItems(prevProps.items, items)),
          items
        };
      });

      return;
    }

    const nextState = {};

    if (prevProps.items !== items) {
      nextState.items = items;
    }

    const selectedIds = this.getSelectedIds();
    const isPendingSelected = _.some(this.props.items, (item) => {
      return selectedIds.indexOf(item.id) > -1 && item.status === 'delay';
    });

    if (isPendingSelected !== this.state.isPendingSelected) {
      nextState.isPendingSelected = isPendingSelected;
    }

    if (!_.isEmpty(nextState)) {
      this.setState(nextState);
    }
  }

  //
  // Control

  getSelectedIds = () => {
    return getSelectedIds(this.state.selectedState);
  };

  //
  // Listeners

  onQueueRowModalOpenOrClose = (isOpen) => {
    this._shouldBlockRefresh = isOpen;
  };

  onSelectAllChange = ({ value }) => {
    this.setState(selectAll(this.state.selectedState, value));
  };

  onSelectedChange = ({ id, value, shiftKey = false }) => {
    this.setState((state) => {
      return toggleSelected(state, this.props.items, id, value, shiftKey);
    });
  };

  onGrabSelectedPress = () => {
    this.props.onGrabSelectedPress(this.getSelectedIds());
  };

  onRemoveSelectedPress = () => {
    this.setState({ isConfirmRemoveModalOpen: true }, () => {
      this._shouldBlockRefresh = true;
    });
  };

  onRemoveSelectedConfirmed = (payload) => {
    this._shouldBlockRefresh = false;
    this.props.onRemoveSelectedPress({ ids: this.getSelectedIds(), ...payload });
    this.setState({ isConfirmRemoveModalOpen: false });
  };

  onConfirmRemoveModalClose = () => {
    this._shouldBlockRefresh = false;
    this.setState({ isConfirmRemoveModalOpen: false });
  };

  //
  // Render

  render() {
    const {
      isFetching,
      isPopulated,
      error,
      isArtistFetching,
      isArtistPopulated,
      isAlbumsFetching,
      isAlbumsPopulated,
      albumsError,
      columns,
      totalRecords,
      isGrabbing,
      isRemoving,
      isRefreshMonitoredDownloadsExecuting,
      onRefreshPress,
      ...otherProps
    } = this.props;

    const {
      allSelected,
      allUnselected,
      selectedState,
      isConfirmRemoveModalOpen,
      isPendingSelected,
      items
    } = this.state;

    const isRefreshing = isFetching || isArtistFetching || isAlbumsFetching || isRefreshMonitoredDownloadsExecuting;
    const isAllPopulated = isPopulated && ((isArtistPopulated && isAlbumsPopulated) || !items.length || items.every((e) => !e.albumId));
    const hasError = error || albumsError;
    const selectedIds = this.getSelectedIds();
    const selectedCount = selectedIds.length;
    const disableSelectedActions = selectedCount === 0;

    return (
      <PageContent title={translate('Queue')}>
        <PageToolbar>
          <PageToolbarSection>
            <PageToolbarButton
              label={translate('Refresh')}
              iconName={icons.REFRESH}
              isSpinning={isRefreshing}
              onPress={onRefreshPress}
            />

            <PageToolbarSeparator />

            <PageToolbarButton
              label={translate('GrabSelected')}
              iconName={icons.DOWNLOAD}
              isDisabled={disableSelectedActions || !isPendingSelected}
              isSpinning={isGrabbing}
              onPress={this.onGrabSelectedPress}
            />

            <PageToolbarButton
              label={translate('RemoveSelected')}
              iconName={icons.REMOVE}
              isDisabled={disableSelectedActions}
              isSpinning={isRemoving}
              onPress={this.onRemoveSelectedPress}
            />
          </PageToolbarSection>

          <PageToolbarSection
            alignContent={align.RIGHT}
          >
            <TableOptionsModalWrapper
              columns={columns}
              {...otherProps}
              optionsComponent={QueueOptionsConnector}
            >
              <PageToolbarButton
                label={translate('Options')}
                iconName={icons.TABLE}
              />
            </TableOptionsModalWrapper>
          </PageToolbarSection>
        </PageToolbar>

        <PageContentBody>
          {
            isRefreshing && !isAllPopulated ?
              <LoadingIndicator /> :
              null
          }

          {
            !isRefreshing && hasError ?
              <Alert kind={kinds.DANGER}>
                {translate('FailedToLoadQueue')}
              </Alert> :
              null
          }

          {
            isAllPopulated && !hasError && !items.length ?
              <Alert kind={kinds.INFO}>
                {translate('QueueIsEmpty')}
              </Alert> :
              null
          }

          {
            isAllPopulated && !hasError && !!items.length ?
              <div>
                <Table
                  columns={columns}
                  selectAll={true}
                  allSelected={allSelected}
                  allUnselected={allUnselected}
                  {...otherProps}
                  optionsComponent={QueueOptionsConnector}
                  onSelectAllChange={this.onSelectAllChange}
                >
                  <TableBody>
                    {
                      items.map((item) => {
                        return (
                          <QueueRowConnector
                            key={item.id}
                            albumId={item.albumId}
                            isSelected={selectedState[item.id]}
                            columns={columns}
                            {...item}
                            onSelectedChange={this.onSelectedChange}
                            onQueueRowModalOpenOrClose={this.onQueueRowModalOpenOrClose}
                          />
                        );
                      })
                    }
                  </TableBody>
                </Table>

                <TablePager
                  totalRecords={totalRecords}
                  isFetching={isRefreshing}
                  {...otherProps}
                />
              </div> :
              null
          }
        </PageContentBody>

        <RemoveQueueItemsModal
          isOpen={isConfirmRemoveModalOpen}
          selectedCount={selectedCount}
          canIgnore={isConfirmRemoveModalOpen && (
            selectedIds.every((id) => {
              const item = items.find((i) => i.id === id);

              return !!(item && item.artistId && item.albumId);
            })
          )}
          allPending={isConfirmRemoveModalOpen && (
            selectedIds.every((id) => {
              const item = items.find((i) => i.id === id);

              if (!item) {
                return false;
              }

              return item.status === 'delay' || item.status === 'downloadClientUnavailable';
            })
          )}
          onRemovePress={this.onRemoveSelectedConfirmed}
          onModalClose={this.onConfirmRemoveModalClose}
        />
      </PageContent>
    );
  }
}

Queue.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isPopulated: PropTypes.bool.isRequired,
  error: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isArtistFetching: PropTypes.bool.isRequired,
  isArtistPopulated: PropTypes.bool.isRequired,
  isAlbumsFetching: PropTypes.bool.isRequired,
  isAlbumsPopulated: PropTypes.bool.isRequired,
  albumsError: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalRecords: PropTypes.number,
  isGrabbing: PropTypes.bool.isRequired,
  isRemoving: PropTypes.bool.isRequired,
  isRefreshMonitoredDownloadsExecuting: PropTypes.bool.isRequired,
  onRefreshPress: PropTypes.func.isRequired,
  onGrabSelectedPress: PropTypes.func.isRequired,
  onRemoveSelectedPress: PropTypes.func.isRequired
};

export default Queue;
