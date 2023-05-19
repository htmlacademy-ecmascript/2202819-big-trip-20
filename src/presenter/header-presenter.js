/*Презентер для отрисовки шапки*/

import {RenderPosition, render} from '../framework/render.js';
import {generateFilter} from '../mock/filter-mock.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';

export default class HeaderPresenter {
  #tripInfoContainer = null;
  #filtersContainer = null;
  #waypointsModel = null;

  #filters = [];

  #tripInfoComponent = new TripInfoView();
  #filtersComponent = null;

  constructor({tripInfoContainer, filtersContainer, waypointsModel}) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#filtersContainer = filtersContainer;
    this.#waypointsModel = waypointsModel;

    this.#filters = generateFilter(this.#waypointsModel.waypoints);
  }

  init() {
    this.#renderTripInfo();
    this.#renderFilter();
  }

  #renderTripInfo() {
    render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilter() {
    render(new FilterView({filters: this.#filters}), this.#filtersContainer);
  }
}
