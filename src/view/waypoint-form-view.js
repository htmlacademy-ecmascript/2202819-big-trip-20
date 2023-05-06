/*Форма создания и редактирования точки маршрута*/

import {CITIES, WAYPOINT_TYPES} from '../const.js';
import {createElement} from '../render.js';
import {humanizeDate, capitalize} from '../util.js';

const DATE_FORMAT_IN_FORM = 'DD/MM/YY HH:mm';

function createWaypointFormTemplate(destination, waypoint, offers) {
  const {basePrice, dateFrom, dateTo, type} = waypoint;

  const startTimeInForm = humanizeDate(dateFrom, DATE_FORMAT_IN_FORM);
  const endTimeInForm = humanizeDate(dateTo, DATE_FORMAT_IN_FORM);

  function createEventTypeItemTemplate(waypointTypes) {
    return waypointTypes.map((waypointType) =>
      `<div class="event__type-item">
         <input id="event-type-${waypointType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${waypointType.toLowerCase()}">
         <label class="event__type-label  event__type-label--${waypointType.toLowerCase()}" for="event-type-${waypointType.toLowerCase()}-1">${waypointType}</label>
       </div>`).join('');
  }

  function createCityTemplate(cities) {
    return cities.map((city) =>
      `<option value="${city}"></option>`).join('');
  }


  function createOfferTemplate(offersList) {
    return offersList.map((offer) =>
      `<div class="event__offer-selector">
         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${offer.id}" type="checkbox" name="event-offer-${type}" ${waypoint.offers.includes(offer.id) ? 'checked' : ''}>
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
             <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

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
             <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination ? destination.name : ''}" list="destination-list-1">
             <datalist id="destination-list-1">
               ${createCityTemplate(CITIES)}
             </datalist>
           </div>

           <div class="event__field-group  event__field-group--time">
             <label class="visually-hidden" for="event-start-time-1">From</label>
             <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTimeInForm}">
             &mdash;
             <label class="visually-hidden" for="event-end-time-1">To</label>
             <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTimeInForm}">
           </div>

           <div class="event__field-group  event__field-group--price">
             <label class="event__label" for="event-price-1">
               <span class="visually-hidden">Price</span>
               &euro;
             </label>
             <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
           </div>

           <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
           <button class="event__reset-btn" type="reset">Cancel</button>
         </header>
         <section class="event__details">
           <section class="event__section  event__section--offers">
             <h3 class="event__section-title  event__section-title--offers">Offers</h3>

             <div class="event__available-offers">
               ${offers ? createOfferTemplate(offers) : ''}
             </div>
           </section>

           <section class="event__section  event__section--destination">
             <h3 class="event__section-title  event__section-title--destination">Destination</h3>
             <p class="event__destination-description">${destination ? destination.description : ''}</p>

             <div class="event__photos-container">
               <div class="event__photos-tape">
                 ${destination ? createPictureTemplate(destination.pictures) : ''}
               </div>
             </div>
           </section>
         </section>
       </form>
     </li>`
  );
}

export default class WaypointFormView {
  constructor({destination, waypoint, offers}) {
    this.destination = destination;
    this.waypoint = waypoint;
    this.offers = offers;
  }

  getTemplate() {
    return createWaypointFormTemplate(this.destination, this.waypoint, this.offers);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
