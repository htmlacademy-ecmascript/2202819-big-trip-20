/*Модель точки маршрута с временными данными*/

import {UpdateType} from '../const.js';
import Observable from '../framework/observable.js';

export default class WaypointsModel extends Observable{
  #waypointsApiService = null;

  #waypoints = [];

  constructor({waypointsApiService}) {
    super();
    this.#waypointsApiService = waypointsApiService;
  }

  get waypoints() {
    return this.#waypoints;
  }

  async init() {
    try {
      const waypoints = await this.#waypointsApiService.waypoints;
      this.#waypoints = waypoints.map(this.#adaptToClient);
    } catch(err) {
      this.#waypoints = [];
    }
    this._notify(UpdateType.FINISH);
    this._notify(UpdateType.INIT);
  }

  async updateWaypoint(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting waypoint');
    }
    try {
      const response = await this.#waypointsApiService.updateWaypoint(update);
      const updatedWaypoint = this.#adaptToClient(response);
      this.#waypoints = [
        ...this.#waypoints.slice(0, index),
        updatedWaypoint,
        ...this.#waypoints.slice(index + 1),
      ];
      this._notify(updateType, updatedWaypoint);
    } catch(err) {
      throw new Error('Can\'t update waypoint');
    }
  }

  addWaypoint(updateType, update) {
    this.#waypoints = [
      update,
      ...this.#waypoints,
    ];
    this._notify(updateType, update);
  }

  deleteWaypoint(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting waypoint');
    }

    this.#waypoints = [
      ...this.#waypoints.slice(0, index),
      ...this.#waypoints.slice(index + 1),
    ];
    this._notify(updateType);
  }

  #adaptToClient(waypoint) {
    const adaptedWaypoint = {...waypoint,
      basePrice: waypoint['base_price'],
      dateFrom: waypoint['date_from'] !== null ? new Date(waypoint['date_from']) : waypoint['date_from'],
      dateTo: waypoint['date_from'] !== null ? new Date(waypoint['date_from']) : waypoint['date_from'],
      isFavorite: waypoint['is_favorite'],
    };

    delete adaptedWaypoint['base_price'];
    delete adaptedWaypoint['date_from'];
    delete adaptedWaypoint['date_to'];
    delete adaptedWaypoint['is_favorite'];

    return adaptedWaypoint;
  }
}
