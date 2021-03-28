import { MAIN_MARK_COORDINATES } from './constants.js'
import { sendOffer } from  './api.js'
import { mainMarker, resetMainMarker } from  './offer.map.js'
import { reset as resetFilter } from './offer.filter.js'

const htmlForm = document.querySelector('.ad-form');
const htmlFieldsets = htmlForm.querySelectorAll('fieldset');
const htmlFieldAddress = htmlForm.querySelector('#address');
const htmlFieldTitle = htmlForm.querySelector('#title');
const htmlButtonReset = htmlForm.querySelector('.ad-form__reset');
const htmlMain = document.querySelector('main');
const htmlSuccess = document.querySelector('#success').content.querySelector('.success');
const htmlError = document.querySelector('#error').content.querySelector('.error');
const htmlErrorButton = htmlError.querySelector('.error__button');

const init = () => {
  htmlFieldTitle.setAttribute('required', 'required');
  htmlFieldTitle.setAttribute('minlength', 30);
  htmlFieldTitle.setAttribute('maxlength', 100);

  htmlFieldAddress.setAttribute('readonly', 'readonly');
  setAddressCoordinates(MAIN_MARK_COORDINATES);

  htmlForm.addEventListener('submit', (event) => {
    event.preventDefault();

    sendOffer(
      () => {
        showSuccess();
      },
      () => {
        showError();
        //if(errors && Array.isArray(errors)) {
        //  for(let error of errors) {
        // console.log(error.errorMessage);
        // htmlFieldTitle.setCustomValidity(error.errorMessage);
        //  }
        //} else {
        //  console.error(errors);
        //  alert('Не удалось отправить форму. Попробуйте ещё раз');
        //}

      },
      new FormData(event.target),
    );
  });
  htmlButtonReset.addEventListener('click', (event) => {
    event.preventDefault();

    htmlForm.reset();
    resetFilter();
    resetMainMarker();

    setAddressCoordinates({
      lat: mainMarker.getLatLng().lat,
      lng: mainMarker.getLatLng().lng,
    });
  });
}

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

const closeSuccess = (evt) => {
  if(
    evt.key === ('Escape' || 'Esc')
    || (
      evt.type === 'mousedown' && evt.which === 1
    )
  ) {

    evt.preventDefault();
    document.removeEventListener('keydown', closeSuccess);
    document.removeEventListener('mousedown', closeSuccess);
    htmlSuccess.remove();

  }
}

const showSuccess = () => {
  document.addEventListener('keydown', closeSuccess);
  document.addEventListener('mousedown', closeSuccess);
  htmlSuccess.style.zIndex = 1000;
  htmlMain.append(htmlSuccess);
  htmlButtonReset.click();
}

const closeError = (evt) => {

  if(
    evt.key === ('Escape' || 'Esc')
    || (
      evt.type === 'mousedown' && evt.which === 1
    )
  ) {
    evt.preventDefault();
    document.removeEventListener('keydown', closeError);
    document.removeEventListener('mousedown', closeError);
    htmlErrorButton.removeEventListener('keydown', closeError);
    htmlError.remove();
  }

}

const showError = () => {
  document.addEventListener('keydown', closeError);
  document.addEventListener('mousedown', closeError);
  htmlErrorButton.addEventListener('keydown', closeError);
  htmlError.style.zIndex = 1000;
  htmlMain.append(htmlError);
}

init();

export {
  disallow,
  activate,
  setAddressCoordinates
}
