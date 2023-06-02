/*Фильтры*/

import {FilterType} from '../const.js';
import {isWaypointFuture, isWaypointPresent, isWaypointPast} from '../util/data-util.js';

const filter = {
  [FilterType.EVERYTHING]: (waypoints) => [...waypoints],
  [FilterType.FUTURE]: (waypoints) => waypoints.filter((waypoint) => isWaypointFuture(waypoint.dateFrom)),
  [FilterType.PRESENT]: (waypoints) => waypoints.filter((waypoint) => isWaypointPresent(waypoint.dateFrom)),
  [FilterType.PAST]: (waypoints) => waypoints.filter((waypoint) => isWaypointPast(waypoint.dateFrom)),
};

export {filter};
