/*Модель точки маршрута с временными данными*/

import {getRandomWaypoint} from '../mock/waypoint-mock.js';

const WAYPOINT_COUNT = 4;

export default class WaypointsModel {
  waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  getWaypoints() {
    return this.waypoints;
  }
}
