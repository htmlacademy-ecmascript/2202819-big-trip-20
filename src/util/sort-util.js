/*Вспомогательные функции для сортировки*/

import {getDateDiff} from './data-util';
import dayjs from 'dayjs';

function durationWaypoint(waypoint) {
  return dayjs(waypoint.dateTo).diff(dayjs(waypoint.dateFrom));
}

function sortByDate(waypoints) {
  return waypoints.sort((a, b) => getDateDiff(a.dateFrom, b.dateFrom));
}

function sortByTime(waypoints) {
  return waypoints.sort((a, b) => durationWaypoint(b) - durationWaypoint(a));
}

function sortByPrice(waypoints) {
  return waypoints.sort((a, b) => b.basePrice - a.basePrice);
}

export {sortByDate, sortByTime, sortByPrice};
