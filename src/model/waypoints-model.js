/*Модель точки маршрута с временными данными*/

import {getRandomWaypoint} from '../mock/waypoint-mock.js';

const WAYPOINT_COUNT = 3;

export default class WaypointsModel {
  #waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  get waypoints() {
    return this.#waypoints;
  }
}
