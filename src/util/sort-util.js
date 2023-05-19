/*Вспомогательные функции для сортировки*/

import dayjs from 'dayjs';

function durationWaypoint(waypoint) {
  return dayjs(waypoint.dateTo).diff(dayjs(waypoint.dateFrom));
}

function sortByTime(waypoints) {
  return waypoints.sort((a, b) => durationWaypoint(b) - durationWaypoint(a));
}

function sortByPrice(waypoints) {
  return waypoints.sort((a, b) => b.basePrice - a.basePrice);
}

export {sortByTime, sortByPrice};
