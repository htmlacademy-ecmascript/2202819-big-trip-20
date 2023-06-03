/*Презентер для отрисовки точки маршрута*/

import {UserAction, UpdateType} from '../const.js';
import {isDatesEqual} from '../util/data-util.js';
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

  #waypointFormComponent = null;
  #waypointComponent = null;

  #handleDataChange = null;
  #handleModeChange = null;

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
    const type = this.#waypoint.type;
    const waypointOffers = this.#waypoint.offers;

    const destination = this.#destinationsModel.getById(id);
    const checkedOffers = this.#offersModel.getById(type, waypointOffers);

    const prevWaypointComponent = this.#waypointComponent;
    const prevWaypointFormComponent = this.#waypointFormComponent;

    this.#waypointComponent = new WaypointView({
      destination,
      waypoint,
      offers: checkedOffers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#waypointFormComponent = new WaypointFormView({
      destinationModel: this.#destinationsModel,
      waypoint,
      offersModel: this.#offersModel,
      onFormSubmit: this.#handleFormSubmit,
      onFormDelete: this.#handleFormDelete,
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
      this.#waypointFormComponent.reset(this.#waypoint);
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
      this.#waypointFormComponent.reset(this.#waypoint);
      this.#replaceFormToCard();
    }
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_WAYPOINT,
      UpdateType.MINOR,
      {...this.#waypoint, isFavorite: !this.#waypoint.isFavorite},
    );
  };

  #handleFormSubmit = (update) => {
    const isMinorUpdate = !isDatesEqual(this.#waypoint.dateFrom, update.dateFrom);

    this.#handleDataChange(
      UserAction.UPDATE_WAYPOINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update,
    );
    this.#replaceFormToCard();
  };

  #handleFormDelete = (waypoint) => {
    this.#handleDataChange(
      UserAction.DELETE_WAYPOINT,
      UpdateType.MINOR,
      waypoint,
    );
  };

  #handleFormCancel = () => {
    this.#waypointFormComponent.reset(this.#waypoint);
    this.#replaceFormToCard();
  };
}
