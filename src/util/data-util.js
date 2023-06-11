/*Вспомогательные функции для дат*/

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const ETime = {
  MsInHour: 1000 * 60 * 60,
  MsInDay: 1000 * 60 * 60 * 24,
};

function humanizeDate(date, dateFormat) {
  return date ? dayjs(date).format(dateFormat) : '';
}

function getTimeDiff(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dateFrom);

  let waypointDuration = 0;

  switch (true) {
    case (timeDiff >= ETime.MsInDay):
      waypointDuration = dayjs.duration(timeDiff).format('DD[D] HH[H] mm[M]');
      break;
    case (timeDiff >= ETime.MsInHour):
      waypointDuration = dayjs.duration(timeDiff).format('HH[H] mm[M]');
      break;
    case (timeDiff < ETime.MsInHour):
      waypointDuration = dayjs.duration(timeDiff).format('mm[M]');
      break;
  }
  return waypointDuration;
}

function getDateDiff(dateOne, dateTwo) {
  return dayjs(dateOne).unix() - dayjs(dateTwo).unix();
}

function isDatesEqual(dateOne, dateTwo) {
  return (dateOne === null && dateTwo === null) || dayjs(dateOne).isSame(dateTwo, 'D');
}

function isFutureWaypoint(date) {
  return dayjs().isBefore(dayjs(date), 'D');
}

function isPresentWaypoint(date) {
  return dayjs().isSame(dayjs(date), 'D');
}

function isPastWaypoint(date) {
  return dayjs().isAfter(dayjs(date), 'D');
}

export {humanizeDate, getTimeDiff, getDateDiff, isDatesEqual, isFutureWaypoint, isPresentWaypoint, isPastWaypoint};
