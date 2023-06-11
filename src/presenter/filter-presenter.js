/*Презентер для отрисовки фильтров*/

import {FilterType, UpdateType} from '../const.js';
import {filter} from '../util/filter-util.js';
import {render, replace, remove} from '../framework/render.js';
import FilterView from '../view/filter-view.js';

export default class FilterPresenter {
  #filtersContainer = null;

  #filtersModel = null;
  #waypointsModel = null;

  #filterComponent = null;

  constructor({filtersContainer, filtersModel, waypointsModel}) {
    this.#filtersContainer = filtersContainer;
    this.#filtersModel = filtersModel;
    this.#waypointsModel = waypointsModel;

    this.#waypointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const waypoints = this.#waypointsModel.waypoints;

    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](waypoints).length
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filtersModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filtersContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filtersModel.filter === filterType) {
      return;
    }
    this.#filtersModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
