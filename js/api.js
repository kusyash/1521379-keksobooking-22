import { createFetch } from './utils.js';

const getOffers = (onSuccess, onFail) => {
  createFetch('https://22.javascript.pages.academy/keksobooking/data', {}, onSuccess, onFail);
};

const sendOffer = (onSuccess, onFail, body) => {
  createFetch('https://22.javascript.pages.academy/keksobooking', {method: 'POST', body}, onSuccess, onFail);
}

export { getOffers, sendOffer };
