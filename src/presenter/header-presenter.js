/*Презентер для отрисовки шапки*/

import {RenderPosition, render} from '../framework/render.js';
import TripInfoView from '../view/trip-info-view.js';

export default class HeaderPresenter {
  #tripMainContainer = null;

  #tripInfoComponent = new TripInfoView();

  constructor({tripMainContainer}) {
    this.#tripMainContainer = tripMainContainer;
  }

  init() {
    this.#renderTripInfo();
  }

  #renderTripInfo() {
    render(this.#tripInfoComponent, this.#tripMainContainer, RenderPosition.AFTERBEGIN);
  }
}
