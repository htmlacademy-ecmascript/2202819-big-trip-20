/*Модель пункта назначения с временными данными*/

import {mockDestinations} from '../mock/waypoint-mock.js';

export default class DestinationsModel {
  destinations = mockDestinations;

  getDestinations() {
    return this.destinations;
  }

  getById(id) {
    return this.destinations.find((elem) => elem.id === id);
  }
}