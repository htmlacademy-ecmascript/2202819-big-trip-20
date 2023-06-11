/*Презентер для отрисовки страницы с точками маршрута*/

import {FilterType, SortType, UpdateType, UserAction} from '../const.js';
import {filter} from '../util/filter-util.js';
import {sortByDate, sortByTime, sortByPrice} from '../util/sort-util.js';
import {render, remove} from '../framework/render.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import SortView from '../view/sort-view.js';
import LoadingView from '../view/loading-view.js';
import NoWaypointView from '../view/no-waypoint-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
import NewWaypointButtonView from '../view/new-waypoint-button-view.js';
import FilterPresenter from'./filter-presenter.js';
import WaypointPresenter from './waypoint-presenter.js';
import NewWaypointPresenter from './new-waypoint-presenter.js';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class BoardPresenter {
  #tripMainContainer = null;
  #filtersContainer = null;
  #boardContainer = null;

  #filterPresenter = null;
  #newWaypointPresenter = null;
  #waypointPresenters = new Map();

  #filtersModel = null;
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  #sortComponent = null;
  #noWaypointComponent = null;
  #newWaypointButtonComponent = null;
  #loadingComponent = new LoadingView();
  #waypointsListComponent = new WaypointsListView();

  #filterType = FilterType.EVERYTHING;
  #currentSortType = SortType.DAY;

  #isLoading = true;
  #isCreating = false;

  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({tripMainContainer, filtersContainer, boardContainer, filtersModel, destinationsModel, waypointsModel, offersModel}) {
    this.#tripMainContainer = tripMainContainer;
    this.#filtersContainer = filtersContainer;
    this.#boardContainer = boardContainer;
    this.#filtersModel = filtersModel;
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;

    const handleNewWaypointButtonClick = () => {
      this.#isCreating = true;
      this.createWaypoint();
      this.#newWaypointButtonComponent.element.disabled = true;
    };

    const handleNewWaypointFormClose = () => {
      this.#isCreating = false;
      this.#newWaypointButtonComponent.element.disabled = false;
      if (this.waypoints.length === 0) {
        this.#renderNoWaypoint();
      }
    };

    this.#newWaypointButtonComponent = new NewWaypointButtonView({
      onClick: handleNewWaypointButtonClick,
    });

    this.#newWaypointPresenter = new NewWaypointPresenter({
      waypointsListContainer: this.#waypointsListComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleViewAction,
      onDestroy: handleNewWaypointFormClose,
    });

    this.#filterPresenter = new FilterPresenter({
      filtersContainer: this.#filtersContainer,
      filtersModel: this.#filtersModel,
      waypointsModel: this.#waypointsModel,
    });

    this.#filtersModel.addObserver(this.#handleModelEvent);
    this.#destinationsModel.addObserver(this.#handleModelEvent);
    this.#waypointsModel.addObserver(this.#handleModelEvent);
    this.#offersModel.addObserver(this.#handleModelEvent);
  }

  get waypoints() {
    this.#filterType = this.#filtersModel.filter;

    const waypoints = this.#waypointsModel.waypoints;
    const filteredWaypoints = filter[this.#filterType](waypoints);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return [...sortByDate(filteredWaypoints)];
      case SortType.TIME:
        return [...sortByTime(filteredWaypoints)];
      case SortType.PRICE:
        return [...sortByPrice(filteredWaypoints)];
    }
    return filteredWaypoints;
  }

  init() {
    this.#renderBoard();
    render(this.#newWaypointButtonComponent, this.#tripMainContainer);
  }

  createWaypoint() {
    this.#currentSortType = SortType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newWaypointPresenter.init();
  }

  #handleModeChange = () => {
    this.#newWaypointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();
    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this.#waypointPresenters.get(update.id).setSaving();
        try {
          await this.#waypointsModel.updateWaypoint(updateType, update);
        } catch(err) {
          this.#waypointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_WAYPOINT:
        this.#newWaypointPresenter.setSaving();
        try {
          await this.#waypointsModel.addWaypoint(updateType, update);
        } catch(err) {
          this.#newWaypointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_WAYPOINT:
        this.#waypointPresenters.get(update.id).setDeleting();
        try {
          await this.#waypointsModel.deleteWaypoint(updateType, update);
        } catch(err) {
          this.#waypointPresenters.get(update.id).setAborting();
        }
        break;
    }
    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#waypointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
      case UpdateType.INIT:
        remove(this.#loadingComponent);
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.FINISH:
        this.#isLoading = false;
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearBoard();
    this.#renderBoard();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#boardContainer);
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#boardContainer);
  }

  #renderNoWaypoint() {
    this.#noWaypointComponent = new NoWaypointView({
      filterType: this.#filterType,
    });
    render(this.#noWaypointComponent, this.#boardContainer);
  }

  #renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter({
      waypointsListContainer: this.#waypointsListComponent.element,
      destinationsModel: this.#destinationsModel,
      waypointsModel: this.#waypointsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    waypointPresenter.init(waypoint);
    this.#waypointPresenters.set(waypoint.id, waypointPresenter);
  }

  #renderBoard() {
    this.#renderSort();

    render(this.#waypointsListComponent, this.#boardContainer);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (this.waypoints.length === 0 && !this.#isCreating) {
      this.#renderNoWaypoint();
      return;
    }

    for (let i = 0; i < this.waypoints.length; i++) {
      this.#renderWaypoint(this.waypoints[i]);
    }
  }

  #clearBoard(resetSortType = false) {
    this.#newWaypointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#noWaypointComponent) {
      remove(this.#noWaypointComponent);
    }
  }
}
