/*Список точек маршрута*/

import AbstractView from '../framework/view/abstract-view.js';

function createWaypointsListTemplate() {
  return (
    '<ul class="trip-events__list"></ul>'
  );
}

export default class WaypointsListView extends AbstractView {
  get template() {
    return createWaypointsListTemplate();
  }
}
