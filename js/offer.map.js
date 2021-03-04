import { MAP_CENTER_COORDINATES, MAIN_MARK_COORDINATES } from './constants.js'
//import { generateData } from './data.js'
import { getOffers } from './api.js'
import { createOfferCard } from './offer.cards.js'

/* global L:readonly */

let map = null;
let layer = null;
let offers = [];
let mainMarker = null;

const initMap = () => {
  map = L.map('map-canvas');

  map.setView(MAP_CENTER_COORDINATES, 10);

  layer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  initMainMarker();

  return map;
};

const initMainMarker = () => {

  const mainMarkerIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
  });

  mainMarker = L.marker(
    MAIN_MARK_COORDINATES,
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  );

  mainMarker.addTo(map);
}

const showError = (error) => {
  const htmlMapMessageContainer = document.querySelector('.map__message');
  const htmlMapMessage = htmlMapMessageContainer.querySelector('.map__message-text');
  htmlMapMessageContainer.classList.add('map__message--error');
  htmlMapMessageContainer.classList.remove('visually-hidden');
  htmlMapMessage.textContent = error;
}

const initOffers = () => {
  getOffers(
    (json) => {
      offers = json;
      setOffersToMap();
    },
    () => {
      showError('Загрузить список предложений не удалось.');
    },
  );
}

const setOffersToMap = () => {

  offers.forEach(({ author, offer, location: { lat, lng } }) => {
    const pin = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -70],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        keepInView: true,
        icon: pin,
      },
    );

    marker
      .addTo(map)
      .bindPopup(createOfferCard({ author, offer }));

  });

}

export {
  map,
  layer,
  mainMarker,
  initMap,
  initOffers
}
