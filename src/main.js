/*Точка входа*/

import DestinationsModel from './model/destinations-model.js';
import WaypointsModel from './model/waypoints-model.js';
import OffersModel from './model/offers-model.js';
import HeaderPresenter from './presenter/header-presenter.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripInfoContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const destinationsModel = new DestinationsModel();
const waypointsModel = new WaypointsModel();
const offersModel = new OffersModel();

const headerPresenter = new HeaderPresenter({
  tripInfoContainer,
  filtersContainer,
  waypointsModel,
});

const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsContainer,
  destinationsModel,
  waypointsModel,
  offersModel,
});

headerPresenter.init();
boardPresenter.init();
