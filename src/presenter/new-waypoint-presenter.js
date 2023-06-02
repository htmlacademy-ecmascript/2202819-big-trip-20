/*Презентер для отрисовки кнопки добавления точки маршрута*/

import {nanoid} from 'nanoid';
import {UserAction, UpdateType} from '../const.js';
import {RenderPosition, render, remove} from '../framework/render.js';
import WaypointFormView from '../view/waypoint-form-view.js';

export default class NewWaypointPresenter {
  #waypointsListContainer = null;

  #destinationsModel = null;
  #offersModel = null;

  #waypointFormComponent = null;

  #handleDataChange = null;
  #handleDestroy = null;

  constructor({waypointsListContainer, destinationsModel, offersModel, onDataChange, onDestroy}) {
    this.#waypointsListContainer = waypointsListContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#waypointFormComponent !== null) {
      return;
    }

    this.#waypointFormComponent = new WaypointFormView({
      destinationModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onFormSubmit: this.#handleFormSubmit,
      onFormCancel: this.#handleFormCancel,
      isNew: true,
    });

    render(this.#waypointFormComponent, this.#waypointsListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#waypointFormComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#waypointFormComponent);
    this.#waypointFormComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (waypoint) => {
    this.#handleDataChange(
      UserAction.ADD_WAYPOINT,
      UpdateType.MINOR,
      {id: nanoid(), ...waypoint},
    );
    this.destroy();
  };

  #handleFormCancel = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
