import { TITLES, DESCRIPTIONS, TYPES, HOURS, FEATURES, IMAGES } from './constants.js';
import { getRandomInteger, getRandomFloat } from './numbers.js';
import { getRandomArrayElement, getRandomArray } from './arrays.js';

const generateOffer = function () {
  let item = {}

  // - author
  item.author = {};
  item.author.avatar = `img/avatars/user0${getRandomInteger(1, 8)}.png`;

  // - offer properties
  item.offer = {};
  item.offer.title = getRandomArrayElement(TITLES);
  item.offer.description = getRandomArrayElement(DESCRIPTIONS);
  item.offer.address = getRandomFloat(35.65, 35.7, 5).toString() + ', ' + getRandomFloat(139.7, 139.8, 5).toString();
  item.offer.price = getRandomInteger(100, 5000);
  item.offer.type = getRandomArrayElement(TYPES);
  item.offer.rooms = getRandomInteger(10, 100);
  item.offer.guests = getRandomInteger(50, 500);
  item.offer.checkin = getRandomArrayElement(HOURS);
  item.offer.checkout = getRandomArrayElement(HOURS);
  item.offer.features = getRandomArray(FEATURES);
  item.offer.photos = getRandomArray(IMAGES);

  // - location
  item.location = {};
  item.location.x = getRandomFloat(35.65, 35.7, 5);
  item.location.y = getRandomFloat(139.7, 139.8, 5);

  return item;
}

const generateData = function () {
  let items = [];

  for (let i = 0; i < 10; i++) {
    items.push(generateOffer());
  }

  return items;
}

export {
  generateOffer,
  generateData
};
