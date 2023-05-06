/*Презентер для отрисовки компонентов*/

import {render} from '../render.js';
import {DEFAULT_WAYPOINT} from '../mock/waypoint-mock.js';
import WaypointView from '../view/waypoint-view.js';
import WaypointFormView from '../view/waypoint-form-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';

export default class WaypointsListPresenter {
  waypointsListComponent = new WaypointsListView();

  constructor({waypointsListContainer, destinationsModel, waypointsModel, offersModel}) {
    this.waypointsListContainer = waypointsListContainer;
    this.destinationsModel = destinationsModel;
    this.waypointsModel = waypointsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.waypointsListWaypoints = [...this.waypointsModel.getWaypoints()];

    render(this.waypointsListComponent, this.waypointsListContainer);

    const destinationId = this.waypointsListWaypoints[0].destination;
    const offersType = this.waypointsListWaypoints[0].type;

    render(new WaypointFormView({
      destination: this.destinationsModel.getById(destinationId),
      waypoint: this.waypointsListWaypoints[0],
      offers: this.offersModel.getByType(offersType),
    }),
    this.waypointsListComponent.getElement());

    const defaultId = DEFAULT_WAYPOINT.destination;
    const defaultType = DEFAULT_WAYPOINT.type;

    render(new WaypointFormView({
      destination: this.destinationsModel.getById(defaultId),
      waypoint: DEFAULT_WAYPOINT,
      offers: this.offersModel.getByType(defaultType),
    }),
    this.waypointsListComponent.getElement());

    for (let i = 1; i < this.waypointsListWaypoints.length; i++) {
      const id = this.waypointsListWaypoints[i].destination;
      const offers = this.waypointsListWaypoints[i].offers;
      const type = this.waypointsListWaypoints[i].type;

      render(new WaypointView({
        destination: this.destinationsModel.getById(id),
        waypoint: this.waypointsListWaypoints[i],
        offers: this.offersModel.getById(type, offers),
      }),
      this.waypointsListComponent.getElement());
    }
  }
}
