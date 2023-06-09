/*Точка входа*/

import FiltersModel from './model/filters-model.js';
import DestinationsModel from './model/destinations-model.js';
import WaypointsModel from './model/waypoints-model.js';
import OffersModel from './model/offers-model.js';
import HeaderPresenter from './presenter/header-presenter.js';
import BoardPresenter from './presenter/board-presenter.js';
import WaypointsApiService from './waypoints-api-service.js';

const AUTHORIZATION = 'Basic yaYayaCocoJamboYayaEaHa2raza';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';

const tripMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const filtersModel = new FiltersModel();
const destinationsModel = new DestinationsModel({
  waypointsApiService: new WaypointsApiService(END_POINT, AUTHORIZATION)
});
const waypointsModel = new WaypointsModel({
  waypointsApiService: new WaypointsApiService(END_POINT, AUTHORIZATION)
});
const offersModel = new OffersModel({
  waypointsApiService: new WaypointsApiService(END_POINT, AUTHORIZATION)
});

const headerPresenter = new HeaderPresenter({
  tripMainContainer,
  destinationsModel,
  waypointsModel,
  offersModel,
});

const boardPresenter = new BoardPresenter({
  tripMainContainer,
  filtersContainer,
  boardContainer: tripEventsContainer,
  filtersModel,
  destinationsModel,
  waypointsModel,
  offersModel,
});

headerPresenter.init();
boardPresenter.init();
destinationsModel.init();
waypointsModel.init();
offersModel.init();
