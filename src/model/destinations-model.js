/*Модель пунктов назначения*/

import {UpdateType} from '../const.js';
import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #waypointsApiService = null;
  #destinations = [];

  constructor({waypointsApiService}) {
    super();
    this.#waypointsApiService = waypointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((elem) => elem.id === id);
  }

  getByName(name) {
    return this.#destinations.find((elem) => elem.name === name);
  }

  async init() {
    try {
      this.#destinations = await this.#waypointsApiService.destinations;
    } catch (err) {
      this.#destinations = [];
    }
    this._notify(UpdateType.INIT);
  }
}
