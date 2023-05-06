/*Модель дополнительных опций с временными данными*/

import {mockOffers} from '../mock/waypoint-mock.js';

export default class OffersModel {
  offers = mockOffers;

  getOffers() {
    return this.offers;
  }

  getByType(type) {
    const offersByType = this.offers.find((offer) => offer.type === type);

    if (offersByType) {
      return offersByType.offers;
    }
  }

  getById(type, ids) {
    return this.getByType(type).filter((offer) => ids.includes(offer.id));
  }
}
