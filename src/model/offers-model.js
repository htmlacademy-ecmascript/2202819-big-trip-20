/*Модель дополнительных опций с временными данными*/

import {UpdateType} from '../const.js';
import Observable from '../framework/observable.js';

export default class OffersModel extends Observable {
  #waypointsApiService = null;
  #offers = [];

  constructor({waypointsApiService}) {
    super();
    this.#waypointsApiService = waypointsApiService;
  }

  get offers() {
    return this.#offers;
  }

  getByType(type) {
    const offersByType = this.#offers.find((offer) => offer.type === type);

    if (offersByType) {
      return offersByType.offers;
    }
  }

  getById(type, ids) {
    return this.getByType(type)?.filter((offer) => ids.includes(offer.id));
  }

  async init() {
    try {
      this.#offers = await this.#waypointsApiService.offers;
    } catch (err) {
      this.#offers = [];
    }
    this._notify(UpdateType.INIT);
  }
}
