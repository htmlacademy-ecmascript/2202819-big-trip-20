/*Презентер для отрисовки информации о поездке*/

import {RenderPosition, render, remove, replace} from '../framework/render.js';
import TripInfoView from '../view/trip-info-view.js';

export default class HeaderPresenter {
  #tripMainContainer = null;

  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  #tripInfoComponent = null;

  constructor({tripMainContainer, destinationsModel, waypointsModel, offersModel}) {
    this.#tripMainContainer = tripMainContainer;
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#destinationsModel.addObserver(this.#handleModelEvent);
    this.#waypointsModel.addObserver(this.#handleModelEvent);
    this.#offersModel.addObserver(this.#handleModelEvent);
  }

  #renderTripInfo() {
    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      destinationsModel: this.#destinationsModel,
      waypointsModel: this.#waypointsModel,
      offersModel: this.#offersModel,
    });

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#tripMainContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = () => {
    this.#renderTripInfo();
  };
}
