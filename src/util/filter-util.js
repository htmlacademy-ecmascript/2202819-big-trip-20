/*Фильтры*/

import {FilterType} from '../const.js';
import {isFutureWaypoint, isPresentWaypoint, isPastWaypoint} from '../util/data-util.js';

const filter = {
  [FilterType.EVERYTHING]: (waypoints) => [...waypoints],
  [FilterType.FUTURE]: (waypoints) => waypoints.filter((waypoint) => isFutureWaypoint(waypoint.dateFrom)),
  [FilterType.PRESENT]: (waypoints) => waypoints.filter((waypoint) => isPresentWaypoint(waypoint.dateFrom)),
  [FilterType.PAST]: (waypoints) => waypoints.filter((waypoint) => isPastWaypoint(waypoint.dateFrom)),
};

export {filter};
