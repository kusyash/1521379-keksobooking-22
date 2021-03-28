import { initMap, initOffers, layer, mainMarker  } from './offer.map.js';
import { disallow as disallowAddForm, activate as activateAddForm, setAddressCoordinates } from './offer.form.js';
import { disallow as disallowFilter, activate as activateFilter } from './offer.filter.js';
import './offer.filter.js'

/**
 * Disasble
 */
disallowAddForm();
disallowFilter();

/**
 * Map
 */
initMap();

/**
 * Events
 */
const init = () => {
  activateAddForm();
  activateFilter();
  initOffers();
  layer.off('load', init);
};

layer.on('load', init);

mainMarker.on('dragend', () => {
  setAddressCoordinates({
    lat: mainMarker.getLatLng().lat,
    lng: mainMarker.getLatLng().lng,
  });
});
