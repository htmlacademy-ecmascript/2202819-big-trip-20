/*Кнопка добавления новой задачи*/

import AbstractView from '../framework/view/abstract-view.js';

function createNewWaypointButtonTemplate() {
  return (
    '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled>New event</button>'
  );
}

export default class AddNewWaypointButtonView extends AbstractView {
  get template() {
    return createNewWaypointButtonTemplate();
  }
}
