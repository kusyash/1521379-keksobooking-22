import { initMap, initOffers, layer, mainMarker } from './offer.map.js';
import { disallow as disallowAddForm, activate as activateAddForm, setAddressCoordinates } from './offer.form.js';
import { disallow as disallowFilter, activate as activateFilter } from './offer.filter.js';

/**
 * Disable
 */
disallowAddForm();
disallowFilter();

/**
 * Init
 */
initMap();
initOffers();

/**
 * Events
 */
layer.on('load', () => {
  activateAddForm();
  activateFilter();
})

mainMarker.on('dragend', () => {
  setAddressCoordinates({
    lat: mainMarker.getLatLng().lat,
    lng: mainMarker.getLatLng().lng,
  });
});
