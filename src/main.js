/*Точка входа*/

import {RenderPosition, render} from './render.js';
import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import WaypointListPresenter from './presenter/waypoint-presenter.js';

const tripInfoContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const waypointListPresenter = new WaypointListPresenter({waypointListContainer: tripEventsContainer});

render(new FilterView(), filtersContainer);
render(new SortView(), tripEventsContainer);
render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);

waypointListPresenter.init();
