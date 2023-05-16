/*Презентер для отрисовки точки маршрута*/

import {render, replace, remove} from '../framework/render.js';
import WaypointView from '../view/waypoint-view.js';
import WaypointFormView from '../view/waypoint-form-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class WaypointPresenter {
  #waypointsListContainer = null;
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #waypointComponent = null;
  #waypointFormComponent = null;

  #waypoint = null;
  #mode = Mode.DEFAULT;

  constructor({waypointsListContainer, destinationsModel, waypointsModel, offersModel, onDataChange, onModeChange}) {
    this.#waypointsListContainer = waypointsListContainer;
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(waypoint) {
    this.#waypoint = waypoint;

    const id = this.#waypoint.destination;
    const waypointOffers = this.#waypoint.offers;
    const type = this.#waypoint.type;

    const destination = this.#destinationsModel.getById(id);
    const offers = this.#offersModel.getById(type, waypointOffers);

    const prevWaypointComponent = this.#waypointComponent;
    const prevWaypointFormComponent = this.#waypointFormComponent;

    this.#waypointComponent = new WaypointView({
      destination,
      waypoint,
      offers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#waypointFormComponent = new WaypointFormView({
      destination,
      waypoint,
      offers,
      onFormSubmit: this.#handleFormSubmit,
      onFormCancel: this.#handleFormCancel,
    });

    if (prevWaypointComponent === null || prevWaypointFormComponent === null) {
      render(this.#waypointComponent, this.#waypointsListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#waypointComponent, prevWaypointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#waypointFormComponent, prevWaypointFormComponent);
    }

    remove(prevWaypointComponent);
    remove(prevWaypointFormComponent);
  }

  destroy() {
    remove(this.#waypointComponent);
    remove(this.#waypointFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm() {
    replace(this.#waypointFormComponent, this.#waypointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToCard() {
    replace(this.#waypointComponent, this.#waypointFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
    }
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#waypoint, isFavorite: !this.#waypoint.isFavorite});
  };

  #handleFormSubmit = (waypoint) => {
    this.#handleDataChange(waypoint);
    this.#replaceFormToCard();
  };

  #handleFormCancel = () => {
    this.#replaceFormToCard();
  };
}
