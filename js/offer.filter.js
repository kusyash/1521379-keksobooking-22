import { OFFER_TOTAL } from './constants.js'

const htmlFilter = document.querySelector('.map__filters');
const htmlFieldsets = htmlFilter.querySelectorAll('fieldset');
const htmlSelects = htmlFilter.querySelectorAll('select');
const ANY_FILTER_VALUE = 'any';

const disallow = () => {
  htmlFilter.classList.add('map__filters--disabled');

  [...htmlFieldsets, ...htmlSelects].forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activate = () => {
  htmlFilter.classList.remove('map__filters--disabled');

  [...htmlFieldsets, ...htmlSelects].forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
};

const reset = () => {
  htmlFilter.reset();
};

const isPriceInRange = (range, value) => {

  switch (range) {

    case ANY_FILTER_VALUE:
      return true;

    case 'low':
      return value <= 10000;

    case 'middle':
      return value >= 10000 && value <= 50000;

    case 'high':
      return value >= 50000;

    default:
      return false;
  }

}

/*
const presentFeatures = (offerFeatures) => {
  const filterFeatures = fillfeaturesAreas(htmlFilter.querySelectorAll('[name="features"]:checked'));

  return !filterFeatures.some((htmlFilter) => !offerFeatures.includes(htmlFilter));
}

const filter = (offers) => {

  const type = htmlFilter.querySelector('#housing-type').value;
  const priceRange = htmlFilter.querySelector('#housing-price').value;
  const roomsQuantity = htmlFilter.querySelector('#housing-rooms').value - 0;
  const guestsQuantity = htmlFilter.querySelector('#housing-guests').value;

  const filteredOffers = offers.filter((offer) => {

    if (!(type === offer.offer.type || type === ANY_FILTER_VALUE)) {
      return
    }
    if (!isPriceInRange(priceRange, offer.offer.price)) {
      return
    }

    if (
      !(Number(roomsQuantity) === Number(offer.offer.rooms) || roomsQuantity === ANY_FILTER_VALUE)
    ) {
      return
    }
    if (!(Number(guestsQuantity) === Number(offer.offer.guests) || guestsQuantity === ANY_FILTER_VALUE)) {
      return
    }
    if (!presentFeatures(offer.offer.features)) {
      return
    }

    return offer;
  })

  return filteredOffers;
}

switch (filterData['housing-price']) {

  case 'middle':
    if(offer.offer.price <= 10000 || offer.offer.price >= 50000) {
      return false;
    }
    break;

  case 'low':
    if(offer.offer.price >= 10000) {
      return false;
    }
    break;

  case 'high':
    if(offer.offer.price <= 50000) {
      return false;
    }
    break;

}

  if(filterData['features'].length > 0) {
  const match = offer.offer.features.filter(feature => filterData['features'].includes(feature));
  if(match.length !== filterData['features'].length) {
    return false;
  }
}

 return true;
});

return result;
}

const getFilterData = (offer) => {
  return filter(offer)
};

const fillFilterChanges = (cb) => {
  // eslint-disable-next-line no-undef
  formData.addEventListener('change', () => {
    resetMainMarker();
    cb();
  });
};
*/


/*const fillfeaturesAreas = (features) => {
  const featuresAreas = [];
  features.forEach(element => featuresAreas.push(element.value));
  return featuresAreas;
}*/

const data = () => {
  const filter = {};
  const formData = new FormData(htmlFilter);

  filter['housing-type'] = formData.get('housing-type');
  filter['housing-rooms'] = formData.get('housing-rooms');
  filter['housing-guests'] = formData.get('housing-guests');
  filter['housing-price'] = formData.get('housing-price');
  filter['features'] = formData.getAll('features');

  return filter;
}

const filter = (offers) => {
  const filterData = data();

  return offers.filter(({ offer }) => {

    if (filterData['housing-type'] !== ANY_FILTER_VALUE) {
      if (offer.type !== filterData['housing-type']) {
        return false;
      }
    }

    if (filterData['housing-rooms'] !== ANY_FILTER_VALUE) {
      if (offer.rooms !== filterData['housing-rooms'] - 0) {
        return false;
      }
    }

    if (filterData['housing-guests'] !== ANY_FILTER_VALUE) {
      if (offer.guests !== filterData['housing-guests'] - 0) {
        return false;
      }
    }

    if (!isPriceInRange(filterData['housing-price'], offer.price - 0)) {
      return false;
    }

    if (filterData['features'].length > 0) {
      const match = offer.features.filter(feature => filterData['features'].includes(feature));
      if(match.length !== filterData['features'].length) {
        return false;
      }
    }

    return true;
  });

}

export {
  disallow,
  activate,
  reset,
  filter,
  OFFER_TOTAL
}
