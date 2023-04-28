/*Презентер для отрисовки компонентов*/

import {render} from '../render.js';
import WaypointView from '../view/waypoint-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import WaypointFormView from '../view/waypoint-form-view.js';

export default class WaypointListPresenter {
  waypointListComponent = new WaypointListView();

  constructor({waypointListContainer}) {
    this.waypointListContainer = waypointListContainer;
  }

  init() {
    render(this.waypointListComponent, this.waypointListContainer);
    render(new WaypointFormView, this.waypointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointView, this.waypointListComponent.getElement());
    }
  }
}
