/*Текст-заглушка при отсутствии точек маршрута*/

import {FilterType} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

const NoWaypointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

function createNoWaypointTemplate(filterType) {
  const noWaypointTextValue = NoWaypointsTextType[filterType];

  return (
    `<p class="trip-events__msg">
       ${noWaypointTextValue}
     </p>`
  );
}

export default class NoWaypointView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoWaypointTemplate(this.#filterType);
  }
}
