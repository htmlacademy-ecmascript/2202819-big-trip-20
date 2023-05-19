/*Презентер для отрисовки страницы с точками маршрута*/

import {SortType} from '../const.js';
import {updateItem} from '../util/common-util.js';
import {sortByTime, sortByPrice} from '../util/sort-util.js';
import {RenderPosition, render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import NoWaypointView from '../view/no-waypoint-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
import WaypointPresenter from './waypoint-presenter.js';

export default class BoardPresenter {
  #boardContainer = null;
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  #sortComponent = null;
  #noWaypointComponent = new NoWaypointView();
  #waypointsListComponent = new WaypointsListView();

  #boardWaypoints = [];

  #waypointPresenters = new Map();

  #currentSortType = SortType.DAY;
  #sourcedBoardWaypoints = [];

  constructor({boardContainer, destinationsModel, waypointsModel, offersModel}) {
    this.#boardContainer = boardContainer;
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#boardWaypoints = [...this.#waypointsModel.waypoints];
    this.#sourcedBoardWaypoints = [...this.#waypointsModel.waypoints];

    this.#renderBoard();
  }

  #handleModeChange = () => {
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleWaypointChange = (updatedWaypoint) => {
    this.#boardWaypoints = updateItem(this.#boardWaypoints, updatedWaypoint);
    this.#sourcedBoardWaypoints = updateItem(this.#sourcedBoardWaypoints, updatedWaypoint);
    this.#waypointPresenters.get(updatedWaypoint.id).init(updatedWaypoint);
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortWaypoints(sortType);
    this.#clearWaypointsList();
    this.#renderWaypointsList();
  };

  #sortWaypoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#boardWaypoints = [...sortByTime(this.#boardWaypoints)];
        break;
      case SortType.PRICE:
        this.#boardWaypoints = [...sortByPrice(this.#boardWaypoints)];
        break;
      default:
        this.#boardWaypoints = [...this.#sourcedBoardWaypoints];
    }

    this.#currentSortType = sortType;
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#boardContainer);
  }

  #renderNoWaypoint() {
    render(this.#noWaypointComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter({
      waypointsListContainer: this.#waypointsListComponent.element,
      destinationsModel: this.#destinationsModel,
      waypointsModel: this.#waypointsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleWaypointChange,
      onModeChange: this.#handleModeChange,
    });

    waypointPresenter.init(waypoint);
    this.#waypointPresenters.set(waypoint.id, waypointPresenter);
  }

  #renderWaypointsList() {
    render(this.#waypointsListComponent, this.#boardContainer);

    for (let i = 0; i < this.#boardWaypoints.length; i++) {
      this.#renderWaypoint(this.#boardWaypoints[i]);
    }
  }

  #renderBoard() {
    render(this.#waypointsListComponent, this.#boardContainer);

    if (!this.#boardWaypoints.length) {
      this.#renderNoWaypoint();
      return;
    }

    this.#renderSort();
    this.#renderWaypointsList();
  }

  #clearWaypointsList() {
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();
  }
}
