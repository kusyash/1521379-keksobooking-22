import { TITLES, DESCRIPTIONS, TYPES, HOURS, FEATURES, IMAGES } from './constants.js';
import { getRandomInteger, getRandomFloat } from './numbers.js';
import { getRandomArrayElement, getRandomArray } from './arrays.js';

const generateOffer = function () {
  const item = {
    // - author
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },

    // - offer properties
    offer: {
      title: getRandomArrayElement(TITLES),
      description: getRandomArrayElement(DESCRIPTIONS),
      address: `${getRandomFloat(35.65, 35.7, 5).toString()}, ${getRandomFloat(139.7, 139.8, 5).toString()}`,
      price: getRandomInteger(100, 5000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(10, 100),
      guests: getRandomInteger(50, 500),
      checkin: getRandomArrayElement(HOURS),
      checkout: getRandomArrayElement(HOURS),
      features: getRandomArray(FEATURES),
      photos: getRandomArray(IMAGES),
    },

    // - location
    location: {
      x: getRandomFloat(35.65, 35.7, 5),
      y: getRandomFloat(139.7, 139.8, 5),
    },
  }
  return item;
}

const generateData = function () {
  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push(generateOffer());
  }

  return items;
}

export {
  generateOffer,
  generateData
};
