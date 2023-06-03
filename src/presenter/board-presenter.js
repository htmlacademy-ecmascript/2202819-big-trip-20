/*Презентер для отрисовки страницы с точками маршрута*/

import {FilterType, SortType, UserAction, UpdateType} from '../const.js';
import {filter} from '../util/filter-util.js';
import {sortByDate, sortByTime, sortByPrice} from '../util/sort-util.js';
import {render, remove} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import NoWaypointView from '../view/no-waypoint-view.js';
import NewWaypointButtonView from '../view/new-waypoint-button-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
import NewWaypointPresenter from './new-waypoint-presenter.js';
import WaypointPresenter from './waypoint-presenter.js';

export default class BoardPresenter {
  #tripMainContainer = null;
  #boardContainer = null;

  #newWaypointPresenter = null;
  #waypointPresenters = new Map();

  #filtersModel = null;
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  #sortComponent = null;
  #noWaypointComponent = null;
  #newWaypointButtonComponent = null;
  #waypointsListComponent = new WaypointsListView();

  #filterType = FilterType.EVERYTHING;
  #currentSortType = SortType.DAY;

  constructor({tripMainContainer, boardContainer, filtersModel, destinationsModel, waypointsModel, offersModel}) {
    this.#tripMainContainer = tripMainContainer;
    this.#boardContainer = boardContainer;
    this.#filtersModel = filtersModel;
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;

    const handleNewWaypointButtonClick = () => {
      this.createWaypoint();
      this.#newWaypointButtonComponent.element.disabled = true;
    };

    const handleNewWaypointFormClose = () => {
      this.#newWaypointButtonComponent.element.disabled = false;
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

    this.#filtersModel.addObserver(this.#handleModelEvent);
    this.#waypointsModel.addObserver(this.#handleModelEvent);
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

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this.#waypointsModel.updateWaypoint(updateType, update);
        break;
      case UserAction.ADD_WAYPOINT:
        this.#waypointsModel.addWaypoint(updateType, update);
        break;
      case UserAction.DELETE_WAYPOINT:
        this.#waypointsModel.deleteWaypoint(updateType, update);
        break;
    }
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

    if (this.waypoints.length === 0) {
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

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#noWaypointComponent) {
      remove(this.#noWaypointComponent);
    }
  }
}
