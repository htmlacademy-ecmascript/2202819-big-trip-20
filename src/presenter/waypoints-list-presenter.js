/*Презентер для отрисовки компонентов*/

import {updateItem} from '../util/common-util.js';
import {RenderPosition, render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import NoWaypointView from '../view/no-waypoint-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
import WaypointPresenter from './waypoint-presenter.js';

export default class WaypointsListPresenter {
  #waypointsListContainer = null;
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  #sortComponent = new SortView();
  #noWaypointComponent = new NoWaypointView();
  #waypointsListComponent = new WaypointsListView();

  #waypointsListWaypoints = [];

  #waypointPresenters = new Map();

  constructor({waypointsListContainer, destinationsModel, waypointsModel, offersModel}) {
    this.#waypointsListContainer = waypointsListContainer;
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#waypointsListWaypoints = [...this.#waypointsModel.waypoints];

    this.#renderWaypointsList();
  }

  #handleModeChange = () => {
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleWaypointChange = (updatedWaypoint) => {
    this.#waypointsListWaypoints = updateItem(this.#waypointsListWaypoints, updatedWaypoint);
    this.#waypointPresenters.get(updatedWaypoint.id).init(updatedWaypoint);
  };

  #renderSort() {
    render(this.#sortComponent, this.#waypointsListComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderNoWaypoint() {
    render(this.#noWaypointComponent, this.#waypointsListComponent.element, RenderPosition.AFTERBEGIN);
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
    render(this.#waypointsListComponent, this.#waypointsListContainer);

    if (!this.#waypointsListWaypoints.length) {
      this.#renderNoWaypoint();
      return;
    }

    for (let i = 0; i < this.#waypointsListWaypoints.length; i++) {
      this.#renderWaypoint(this.#waypointsListWaypoints[i]);
    }

    this.#renderSort();
  }

  #clearWaypointsList() {
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();
  }
}
