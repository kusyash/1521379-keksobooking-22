import { createFetch } from './utils.js';

const getOffers = () => {
  return new Promise( (resolve, reject) => {
    createFetch('https://22.javascript.pages.academy/keksobooking/data', {}, resolve, reject);
  });
};

const sendOffer = (onSuccess, onFail, body) => {
  createFetch('https://22.javascript.pages.academy/keksobooking', {method: 'POST', body}, onSuccess, onFail);
}

export { getOffers, sendOffer };
