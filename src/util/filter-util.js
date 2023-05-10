/*Фильтры*/

import {FilterType} from '../const.js';
import {isWaypointFuture, isWaypointPresent, isWaypointPast, sortByDate} from './data-util.js';

const filter = {
  [FilterType.EVERYTHING]: (waypoints) => waypoints.sort((a, b) => sortByDate(a.dateFrom, b.dateFrom)),
  [FilterType.FUTURE]: (waypoints) => waypoints.filter((waypoint) => isWaypointFuture(waypoint.dateFrom)),
  [FilterType.PRESENT]: (waypoints) => waypoints.filter((waypoint) => isWaypointPresent(waypoint.dateFrom)),
  [FilterType.PAST]: (waypoints) => waypoints.filter((waypoint) => isWaypointPast(waypoint.dateFrom)),
};

export {filter};
