/*Точка входа*/

import {RenderPosition, render} from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersModel from './model/filters-model.js';
import DestinationsModel from './model/destinations-model.js';
import WaypointsModel from './model/waypoints-model.js';
import OffersModel from './model/offers-model.js';
import FilterPresenter from'./presenter/filter-presenter.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const filtersModel = new FiltersModel();
const destinationsModel = new DestinationsModel();
const waypointsModel = new WaypointsModel();
const offersModel = new OffersModel();

const filterPresenter = new FilterPresenter({
  filtersContainer,
  filtersModel,
  waypointsModel,
});

const boardPresenter = new BoardPresenter({
  tripMainContainer,
  boardContainer: tripEventsContainer,
  filtersModel,
  destinationsModel,
  waypointsModel,
  offersModel,
});

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);

filterPresenter.init();
boardPresenter.init();
