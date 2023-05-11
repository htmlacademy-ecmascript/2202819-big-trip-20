/*Презентер для отрисовки компонентов*/

import {render, replace} from '../framework/render.js';
import WaypointView from '../view/waypoint-view.js';
import NoWaypointView from '../view/no-waypoint-view.js';
import WaypointFormView from '../view/waypoint-form-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';

export default class WaypointsListPresenter {
  #waypointsListContainer = null;
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  #waypointsListComponent = new WaypointsListView();

  #waypointsListWaypoints = [];

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

  #renderWaypoint(destination, waypoint, offers) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToWaypoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const waypointComponent = new WaypointView({
      onEditClick: () => {
        replaceWaypointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
      destination,
      waypoint,
      offers});

    const waypointFormComponent = new WaypointFormView({
      onFormSubmit: () => {
        replaceFormToWaypoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormCancel: () => {
        replaceFormToWaypoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      destination,
      waypoint,
      offers});

    function replaceWaypointToForm() {
      replace(waypointFormComponent, waypointComponent);
    }

    function replaceFormToWaypoint() {
      replace(waypointComponent, waypointFormComponent);
    }

    render(waypointComponent, this.#waypointsListComponent.element);
  }

  #renderWaypointsList() {
    render(this.#waypointsListComponent, this.#waypointsListContainer);

    if (!this.#waypointsListWaypoints.length) {
      render(new NoWaypointView(), this.#waypointsListComponent.element);
      return;
    }

    for (let i = 0; i < this.#waypointsListWaypoints.length; i++) {
      const id = this.#waypointsListWaypoints[i].destination;
      const offers = this.#waypointsListWaypoints[i].offers;
      const type = this.#waypointsListWaypoints[i].type;

      this.#renderWaypoint(
        this.#destinationsModel.getById(id),
        this.#waypointsListWaypoints[i],
        this.#offersModel.getById(type, offers),
      );
    }
  }
}
