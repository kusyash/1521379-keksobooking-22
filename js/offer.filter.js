const htmlFilter = document.querySelector('.map__filters');
const htmlFieldsets = htmlFilter.querySelectorAll('fieldset');
const htmlSelects = htmlFilter.querySelectorAll('select');

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

export {
  disallow,
  activate
}
