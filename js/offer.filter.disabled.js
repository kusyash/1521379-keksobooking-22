export const mapFiltering = document.querySelector('.map__filters');
//export const advertisementForm = document.querySelector('.ad-form');

export const includeElements = (parent, selector) => {
  parent.querySelectorAll(selector)
    .forEach((element) => element.disabled = false);
};

// const disallowElements = (parent, selector) => {
//   parent.querySelectorAll(selector)
//     .forEach((element) => element.disabled = true);
// };

// advertisementForm.classList.add('ad-form--disabled');
// mapFiltering.classList.add('map__filters--disabled');
// disallowElements(advertisementForm, 'input');
// disallowElements(advertisementForm, 'select');
// disallowElements(advertisementForm, 'button');
// disallowElements(advertisementForm, 'textarea');
// disallowElements(mapFiltering, 'input');
// disallowElements(mapFiltering, 'select');
