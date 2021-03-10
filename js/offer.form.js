import { MAIN_MARK_COORDINATES } from './constants.js'

const htmlForm = document.querySelector('.ad-form');
const htmlFieldsets = htmlForm.querySelectorAll('fieldset');
const htmlFieldAddress = htmlForm.querySelector('#address');

const disallow = () => {
  htmlForm.classList.add('ad-form--disabled');

  htmlFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activate = () => {
  htmlForm.classList.remove('ad-form--disabled');

  htmlFieldsets.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
};

const setAddressCoordinates = (coordinates) => {
  htmlFieldAddress.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
};

htmlFieldAddress.setAttribute('readonly', 'readonly');
setAddressCoordinates(MAIN_MARK_COORDINATES);

export {
  disallow,
  activate,
  setAddressCoordinates
}
