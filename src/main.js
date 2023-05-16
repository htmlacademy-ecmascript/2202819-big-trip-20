/*Точка входа*/

import {RenderPosition, render} from './framework/render.js';
import {generateFilter} from './mock/filter-mock.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import DestinationsModel from './model/destinations-model.js';
import WaypointsModel from './model/waypoints-model.js';
import OffersModel from './model/offers-model.js';
import WaypointsListPresenter from './presenter/waypoints-list-presenter.js';

const tripInfoContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const destinationsModel = new DestinationsModel();
const waypointsModel = new WaypointsModel();
const offersModel = new OffersModel();

const waypointsListPresenter = new WaypointsListPresenter({
  waypointsListContainer: tripEventsContainer,
  destinationsModel,
  waypointsModel,
  offersModel,
});

const filters = generateFilter(waypointsModel.waypoints);

render(new FilterView({filters}), filtersContainer);
render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);

waypointsListPresenter.init();
