/*Информация о поездке*/

import {humanizeDate} from '../util/data-util.js';
import {sortByDate} from '../util/sort-util.js';
import AbstractView from '../framework/view/abstract-view.js';

import dayjs from 'dayjs';

function createTripInfoTemplate({waypoints, intialDestination, finalDestination, shortWaypoints, intialDate, finalDate, totalPrice}) {
  return (
    `<section class="trip-main__trip-info  trip-info">
       <div class="trip-info__main">
         <h1 class="trip-info__title">${waypoints.length > 3 ? `${intialDestination ? intialDestination : ''} &mdash; . . . &mdash; ${finalDestination ? finalDestination : ''}` : shortWaypoints.join(' &mdash; ')}</h1>

         <p class="trip-info__dates">${intialDate}&nbsp;&mdash;&nbsp;${finalDate}</p>
       </div>

       <p class="trip-info__cost">
         Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice ? totalPrice : ''}</span>
       </p>
     </section>`
  );
}

export default class TripInfoView extends AbstractView {
  #destinationsModel = null;
  #waypointsModel = null;
  #offersModel = null;

  constructor({destinationsModel, waypointsModel, offersModel}) {
    super();
    this.#destinationsModel = destinationsModel;
    this.#waypointsModel = waypointsModel;
    this.#offersModel = offersModel;
  }

  get template() {
    const waypoints = this.#waypointsModel.waypoints;
    const shortWaypoints = sortByDate(waypoints).map((waypoint) => this.#destinationsModel.getById(waypoint.destination)?.name);

    const intialDestination = this.#destinationsModel.getById(waypoints[0]?.destination)?.name;
    const finalDestination = this.#destinationsModel.getById(waypoints[waypoints.length - 1]?.destination)?.name;

    const isSameMonth = dayjs(waypoints[0]?.dateFrom).month() === dayjs(waypoints[waypoints.length - 1]?.dateTo).month();
    const intialDate = humanizeDate(waypoints[0]?.dateFrom, `${isSameMonth ? 'MMM D' : 'D MMM'}`);
    const finalDate = humanizeDate(waypoints[waypoints.length - 1]?.dateTo, `${isSameMonth ? 'D' : 'D MMM'}`);

    const totalPrice = waypoints?.reduce((total, waypoint) => {
      const checkedOffers = this.#offersModel.getById(waypoint.type, waypoint.offers);
      const checkedOffersPrice = checkedOffers?.reduce((sum, checkedOffer) => sum + checkedOffer.price, 0);
      total += checkedOffersPrice + waypoint.basePrice;
      return total;
    }, 0);

    return createTripInfoTemplate({waypoints, intialDestination, finalDestination, shortWaypoints, intialDate, finalDate, totalPrice});
  }
}
