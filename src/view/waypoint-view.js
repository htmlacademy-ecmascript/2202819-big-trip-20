/*Точка маршрута*/

import {humanizeDate, getTimeDiff} from '../util/data-util.js';
import AbstractView from '../framework/view/abstract-view.js';

import he from 'he';

const DATE_FORMAT = 'YYYY-MM-DD';
const EVENT_DATE = 'MMM DD';
const TIME_FORMAT = 'HH:mm';

function createWaypointTemplate(destination, waypoint, offers) {
  const {basePrice, dateFrom, dateTo, isFavorite, type} = waypoint;

  const dateFormat = humanizeDate(dateFrom, DATE_FORMAT);
  const eventDate = humanizeDate(dateFrom, EVENT_DATE);
  const startTime = humanizeDate(dateFrom, TIME_FORMAT);
  const endTime = humanizeDate(dateTo, TIME_FORMAT);
  const durationTime = getTimeDiff(dateFrom, dateTo);

  const favoriteClassName = isFavorite
    ? 'event__favorite-btn--active'
    : '';

  function createOfferTemplate(offersList) {
    return offersList.map((offer) =>
      `<li class="event__offer">
         <span class="event__offer-title">${offer.title}</span>
         &plus;&euro;&nbsp;
         <span class="event__offer-price">${offer.price}</span>
       </li>`).join('');
  }

  return (
    `<li class="trip-events__item">
       <div class="event">
         <time class="event__date" datetime="${dateFormat}">${eventDate}</time>
         <div class="event__type">
           <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
         </div>
         <h3 class="event__title">${type} ${he.encode(`${destination.name}`)}</h3>
         <div class="event__schedule">
           <p class="event__time">
             <time class="event__start-time" datetime="${dateFormat}T${startTime}">${startTime}</time>
             &mdash;
             <time class="event__end-time" datetime="${dateFormat}T${endTime}">${endTime}</time>
           </p>
           <p class="event__duration">${durationTime}</p>
         </div>
         <p class="event__price">
           &euro;&nbsp;<span class="event__price-value">${he.encode(`${basePrice}`)}</span>
         </p>
         <h4 class="visually-hidden">Offers:</h4>
         <ul class="event__selected-offers">
           ${createOfferTemplate(offers)}
         </ul>
         <button class="event__favorite-btn ${favoriteClassName}" type="button">
           <span class="visually-hidden">Add to favorite</span>
           <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
             <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
           </svg>
         </button>
         <button class="event__rollup-btn" type="button">
           <span class="visually-hidden">Open event</span>
         </button>
       </div>
      </li>`
  );
}

export default class WaypointView extends AbstractView {
  #handleFavoriteClick = null;
  #handleEditClick = null;
  #destination = null;
  #waypoint = null;
  #offers = null;

  constructor({onFavoriteClick, onEditClick, destination, waypoint, offers}) {
    super();
    this.#handleFavoriteClick = onFavoriteClick;
    this.#handleEditClick = onEditClick;
    this.#destination = destination;
    this.#waypoint = waypoint;
    this.#offers = offers;

    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createWaypointTemplate(this.#destination, this.#waypoint, this.#offers);
  }

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
