/*Генерация фильтров*/

import {filter} from '../util/filter-util.js';

function generateFilter(waypoints) {
  return Object.entries(filter).map(
    ([filterType, filterWaypoints]) => ({
      type: filterType,
      count: filterWaypoints(waypoints).length,
    }),
  );
}

export {generateFilter};
