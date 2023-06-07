/*Форма создания и редактирования точки маршрута*/

import {WAYPOINT_TYPES} from '../const.js';
import {capitalize} from '../util/common-util.js';
import {humanizeDate} from '../util/data-util.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

import he from 'he';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const DEFAULT_WAYPOINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'taxi',
};

const DATE_FORMAT_IN_FORM = 'DD/MM/YY HH:mm';

function createWaypointFormTemplate(destinations, destination, waypoint, offers, isNew) {
  const {basePrice, dateFrom, dateTo, type, isDisabled, isSaving, isDeleting} = waypoint;

  const startTimeInForm = humanizeDate(dateFrom, DATE_FORMAT_IN_FORM);
  const endTimeInForm = humanizeDate(dateTo, DATE_FORMAT_IN_FORM);

  const deleteButton = isDeleting ? 'Deleting...' : 'Delete';

  function createEventTypeItemTemplate(waypointTypes) {
    return waypointTypes.map((waypointType) =>
      `<div class="event__type-item">
         <input id="event-type-${waypointType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${waypointType.toLowerCase()}">
         <label class="event__type-label  event__type-label--${waypointType.toLowerCase()}" for="event-type-${waypointType.toLowerCase()}-1">${waypointType}</label>
       </div>`).join('');
  }

  function createCityTemplate(destinationsList) {
    return destinationsList.map((elem) =>
      `<option value="${elem.name}"></option>`).join('');
  }

  function createOfferTemplate(offersList) {
    return offersList.map((offer) =>
      `<div class="event__offer-selector">
         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${offer.id}" value="${offer.id}" type="checkbox" name="event-offer-${type}" ${waypoint.offers.includes(offer.id) ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
         <label class="event__offer-label" for="event-offer-${type}-${offer.id}">
           <span class="event__offer-title">${offer.title}</span>
           &plus;&euro;&nbsp;
           <span class="event__offer-price">${offer.price}</span>
         </label>
       </div>`).join('');
  }

  function createPictureTemplate(pictures) {
    return pictures.map((picture) =>
      `<img class="event__photo" src="${picture.src}" alt="Event photo">`).join('');
  }

  return (
    `<li class="trip-events__item">
       <form class="event event--edit" action="#" method="post">
         <header class="event__header">
           <div class="event__type-wrapper">
             <label class="event__type  event__type-btn" for="event-type-toggle-1">
               <span class="visually-hidden">Choose event type</span>
               <img class="event__type-icon" width="17" height="17" ${type ? `src="img/icons/${type}.png"` : ''} alt="Event type icon">
             </label>
             <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" ${isDisabled ? 'disabled' : ''}>

             <div class="event__type-list">
               <fieldset class="event__type-group">
                 <legend class="visually-hidden">Event type</legend>
                 ${createEventTypeItemTemplate(WAYPOINT_TYPES)}
               </fieldset>
             </div>
           </div>

           <div class="event__field-group  event__field-group--destination">
             <label class="event__label  event__type-output" for="event-destination-1">
               ${type ? capitalize(type) : ''}
             </label>
             <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" list="destination-list-1" value="${destination ? he.encode(`${destination.name}`) : ''}" ${isDisabled ? 'disabled' : ''}>
             <datalist id="destination-list-1">
               ${destinations ? createCityTemplate(destinations) : ''}
             </datalist>
           </div>

           <div class="event__field-group  event__field-group--time">
             <label class="visually-hidden" for="event-start-time-1">From</label>
             <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTimeInForm}" ${isDisabled ? 'disabled' : ''}>
             &mdash;
             <label class="visually-hidden" for="event-end-time-1">To</label>
             <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTimeInForm}" ${isDisabled ? 'disabled' : ''}>
           </div>

           <div class="event__field-group  event__field-group--price">
             <label class="event__label" for="event-price-1">
               <span class="visually-hidden">Price</span>
               &euro;
             </label>
             <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${he.encode(`${basePrice}`)}" ${isDisabled ? 'disabled' : ''}>
           </div>

           <button class="event__save-btn  btn  btn--blue" type="submit" ${destination?.name && dateFrom && dateTo && basePrice > 0 ? '' : 'disabled'} ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
           <button class="event__reset-btn" type="reset" ${isDisabled ? 'disabled' : ''}>${isNew ? 'Cancel' : deleteButton}</button>
           ${isNew ? '' : `<button class="event__rollup-btn" type="button">
             <span class="visually-hidden">Open event</span>
           </button>`}
         </header>
         <section class="event__details">
           <section class="event__section  event__section--offers">
             <h3 class="event__section-title  event__section-title--offers">Offers</h3>

             <div class="event__available-offers">
               ${offers ? createOfferTemplate(offers) : ''}
             </div>
           </section>

           ${destination ? `<section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">${destination.description}</p>

              <div class="event__photos-container">
                <div class="event__photos-tape">
                  ${createPictureTemplate(destination.pictures)}
                </div>
              </div>
            </section>` : ''}
         </section>
       </form>
     </li>`
  );
}

export default class WaypointFormView extends AbstractStatefulView {
  #datepicker = null;

  #destinationsModel = null;
  #waypoint = null;
  #offersModel = null;

  #handleFormSubmit = null;
  #handleFormDelete = null;
  #handleFormCancel = null;

  #isNew = false;

  constructor({destinationsModel, waypoint = DEFAULT_WAYPOINT, offersModel, onFormSubmit, onFormDelete, onFormCancel, isNew}) {
    super();
    this.#destinationsModel = destinationsModel;
    this._setState(WaypointFormView.parseWaypointToState(waypoint));
    this.#offersModel = offersModel;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormDelete = onFormDelete;
    this.#handleFormCancel = onFormCancel;
    this.#isNew = isNew;

    this._restoreHandlers();
  }

  get template() {
    return createWaypointFormTemplate(this.#destinationsModel.destinations, this.#destinationsModel.getById(this._state.destination), this._state, this.#offersModel.getByType(this._state.type), this.#isNew);
  }

  removeElement() {
    super.removeElement();

    if (this.#datepicker) {
      this.#datepicker.destroy();
      this.#datepicker = null;
    }
  }

  reset(waypoint) {
    this.updateElement(
      WaypointFormView.parseWaypointToState(waypoint),
    );
  }

  _restoreHandlers() {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    if(this.#isNew) {
      this.element.querySelector('.event__reset-btn')
        .addEventListener('click', this.#formCancelHandler);
    } else {
      this.element.querySelector('.event__reset-btn')
        .addEventListener('click', this.#formDeleteHandler);

      this.element.querySelector('.event__rollup-btn')
        .addEventListener('click', this.#formCancelHandler);
    }

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeChangeHandler);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);

    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#basePriceChangeHandler);

    this.element.querySelector('.event__available-offers')
      .addEventListener('change', this.#offerSelectHandler);

    this.#setDatepickerFrom();
    this.#setDatepickerTo();
  }

  #typeChangeHandler = (evt) => {
    this.updateElement({
      type: evt.target.value,
    });
  };

  #destinationChangeHandler = (evt) => {
    this.updateElement({
      destination: this.#destinationsModel.getByName(evt.target.value)?.id,
    });
  };

  #basePriceChangeHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      basePrice: Number(evt.target.value)
    });
  };

  #offerSelectHandler = (evt) => {
    const selectedOffer = evt.target.value;
    if (evt.target.checked) {
      this.updateElement({
        offers: [...this._state.offers, selectedOffer],
      });
    } else {
      this.updateElement({
        offers: [...this._state.offers.filter((offer) => offer !== selectedOffer)],
      });
    }
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(WaypointFormView.parseStateToWaypoint(this._state));
  };

  #formDeleteHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormDelete(WaypointFormView.parseStateToWaypoint(this._state));
  };

  #formCancelHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormCancel();
  };

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
  };

  #setDatepickerFrom() {
    this.#datepicker = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        maxDate: this._state.dateTo,
        defaultDate: this._state.dateFrom,
        onChange: this.#dateFromChangeHandler,
        'time_24hr': true,
      },
    );
  }

  #setDatepickerTo() {
    this.#datepicker = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        minDate: this._state.dateFrom,
        defaultDate: this._state.dateTo,
        onChange: this.#dateToChangeHandler,
        'time_24hr': true,
      },
    );
  }

  static parseWaypointToState(waypoint) {
    return {...waypoint,
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
  }

  static parseStateToWaypoint(state) {
    const waypoint = {...state};

    delete waypoint.isDisabled;
    delete waypoint.isSaving;
    delete waypoint.isDeleting;

    return waypoint;
  }
}
