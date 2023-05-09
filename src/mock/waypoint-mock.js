/*Генерация тестовых данных*/

import {DESCRIPTIONS} from '../const.js';
import {getRandomArrayElement} from '../util.js';

const mockWaypoints = [
  {
    id: 1,
    basePrice: 6318,
    dateFrom: '2023-10-27T00:28:01.397Z',
    dateTo: '2023-10-28T00:28:01.397Z',
    destination: 1,
    isFavorite: true,
    offers: [],
    type: 'restaurant',
  },
  {
    id: 2,
    basePrice: 6801,
    dateFrom: '2023-10-28T00:28:01.397Z',
    dateTo: '2023-10-28T15:28:01.397Z',
    destination: 2,
    isFavorite: false,
    offers: [1],
    type: 'check-in',
  },
  {
    id: 3,
    basePrice: 7079,
    dateFrom: '2023-10-28T15:28:01.397Z',
    dateTo: '2023-10-29T20:28:01.397Z',
    destination: 3,
    isFavorite: true,
    offers: [1, 2],
    type: 'drive',
  },
  {
    id: 4,
    basePrice: 2399,
    dateFrom: '2023-10-29T20:28:01.397Z',
    dateTo: '2023-10-31T07:28:01.397Z',
    destination: 1,
    isFavorite: true,
    offers: [1, 2, 3],
    type: 'train',
  },
  {
    id: 5,
    basePrice: 9713,
    dateFrom: '2023-10-31T21:28:01.397Z',
    dateTo: '2023-11-01T08:28:01.397Z',
    destination: 2,
    isFavorite: true,
    offers: [1, 2, 3, 4],
    type: 'sightseeing',
  },
  {
    id: 6,
    basePrice: 4401,
    dateFrom: '2023-11-01T08:28:01.397Z',
    dateTo: '2023-11-02T22:28:01.397Z',
    destination: 3,
    isFavorite: false,
    offers: [],
    type: 'taxi',
  },
  {
    id: 7,
    basePrice: 3089,
    dateFrom: '2023-11-02T22:28:01.397Z',
    dateTo: '2023-11-03T04:28:01.397Z',
    destination: 1,
    isFavorite: false,
    offers: [1],
    type: 'flight',
  },
  {
    id: 8,
    basePrice: 226,
    dateFrom: '2023-11-04T06:28:01.397Z',
    dateTo: '2023-11-05T07:28:01.397Z',
    destination: 2,
    isFavorite: true,
    offers: [1, 2],
    type: 'bus',
  },
  {
    id: 9,
    basePrice: 8274,
    dateFrom: '2023-11-17T17:28:01.397Z',
    dateTo: '2023-11-19T16:28:01.397Z',
    destination: 3,
    isFavorite: true,
    offers: [1, 2, 3],
    type: 'ship',
  },
];

const mockDestinations = [
  {
    id: 1,
    description: getRandomArrayElement(DESCRIPTIONS),
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      }
    ],
  },
  {
    id: 2,
    description: getRandomArrayElement(DESCRIPTIONS),
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 3,
    description: getRandomArrayElement(DESCRIPTIONS),
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business class',
        price: 70,
      },
      {
        id: 2,
        title: 'Choose the radio station',
        price: 140,
      },
      {
        id: 3,
        title: 'Choose temperature',
        price: 63,
      },
      {
        id: 4,
        title: 'Drive quickly',
        price: 84,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        title: 'Infotainment system',
        price: 61,
      },
      {
        id: 2,
        title: 'Order meal',
        price: 63,
      },
      {
        id: 3,
        title: 'Choose seats',
        price: 161,
      }
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        title: 'Book a taxi at the arrival point',
        price: 55,
      },
      {
        id: 2,
        title: 'Order a breakfast',
        price: 137,
      },
      {
        id: 3,
        title: 'Wake up at a certain time',
        price: 71,
      }
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: 'Choose meal',
        price: 138,
      },
      {
        id: 2,
        title: 'Choose seats',
        price: 68,
      },
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 48,
      },
      {
        id: 4,
        title: 'Add luggage',
        price: 188,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 1,
        title: 'Choose the time of check-in',
        price: 122,
      },
      {
        id: 2,
        title: 'Choose the time of check-out',
        price: 170,
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 114,
      },
      {
        id: 4,
        title: 'Laundry',
        price: 168,
      },
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 45,
      }
    ],
  },
  {
    type: 'sightseeing',
    offers: [],
  },
  {
    type: 'ship',
    offers: [
      {
        id: 1,
        title: 'Choose meal',
        price: 91,
      },
      {
        id: 2,
        title: 'Choose seats',
        price: 71,
      },
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 113,
      },
      {
        id: 4,
        title: 'Upgrade to business class',
        price: 30,
      },
      {
        id: 5,
        title: 'Add luggage',
        price: 172,
      },
      {
        id: 6,
        title: 'Business lounge',
        price: 177,
      }
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        title: 'With automatic transmission',
        price: 30,
      },
      {
        id: 2,
        title: 'With air conditioning',
        price: 103,
      }
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 1,
        title: 'Choose live music',
        price: 50,
      },
      {
        id: 2,
        title: 'Choose VIP area',
        price: 61,
      }
    ],
  }
];

function getRandomWaypoint() {
  return getRandomArrayElement(mockWaypoints);
}

export {mockDestinations, mockOffers, getRandomWaypoint};
