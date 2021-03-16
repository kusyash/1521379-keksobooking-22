import { HOUSES_TYPES, FEATURES } from './constants.js';

const htmlCardTemplate = document.querySelector('#card').content;

const createOfferCard = ({offer, author}) => {
  const htmlCardTemplatePopup = htmlCardTemplate.querySelector('.popup');
  const htmlCardTemplatePopupClone = htmlCardTemplatePopup.cloneNode(true);
  const htmlCardTitle = htmlCardTemplatePopupClone.querySelector('.popup__title');
  const htmlCardAddress = htmlCardTemplatePopupClone.querySelector('.popup__text--address');
  const htmlCardPrice = htmlCardTemplatePopupClone.querySelector('.popup__text--price');
  const htmlCardType = htmlCardTemplatePopupClone.querySelector('.popup__type');
  const htmlCardCapacity = htmlCardTemplatePopupClone.querySelector('.popup__text--capacity');
  const htmlCardTime = htmlCardTemplatePopupClone.querySelector('.popup__text--time');
  const htmlCardDescription = htmlCardTemplatePopupClone.querySelector('.popup__description');
  const htmlCardFeatures = htmlCardTemplatePopupClone.querySelector('.popup__features');
  const htmlCardPhotos = htmlCardTemplatePopupClone.querySelector('.popup__photos');
  const htmlCardImg = htmlCardTemplatePopupClone.querySelector('.popup__photo');
  const htmlCardAvatarImg = htmlCardTemplatePopupClone.querySelector('.popup__avatar');

  if(offer.title) {
    htmlCardTitle.textContent = offer.title;
  } else {
    htmlCardTitle.classList.add('visually-hidden');
  }

  if(offer.address) {
    htmlCardAddress.textContent = offer.address;
  } else {
    htmlCardAddress.classList.add('visually-hidden');
  }

  if(offer.price) {
    htmlCardPrice.textContent = `${offer.price} ₽/ночь`;
  } else {
    htmlCardPrice.classList.add('visually-hidden');
  }

  if(offer.type) {
    htmlCardType.textContent = HOUSES_TYPES[offer.type];
  } else {
    htmlCardType.classList.add('visually-hidden');
  }

  if(offer.rooms && offer.guests) {
    htmlCardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    htmlCardCapacity.classList.add('visually-hidden');
  }

  if(offer.checkin && offer.checkout) {
    htmlCardTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    htmlCardTime.classList.add('visually-hidden');
  }

  if(offer.features && offer.features.length > 0) {

    let htmlFeatures = {};

    for(let feature of FEATURES) {
      if(!offer.features.includes(feature)) {
        htmlFeatures[feature] = htmlCardFeatures.querySelector('.popup__feature.popup__feature--'+feature);
        if(htmlFeatures[feature]) {
          htmlFeatures[feature].remove();
        }
      }
    }

  } else {
    htmlCardFeatures.classList.add('visually-hidden');
  }

  if(offer.description) {
    htmlCardDescription.textContent = offer.description;
  } else {
    htmlCardDescription.classList.add('visually-hidden');
  }

  if(offer.photos && offer.photos.length > 0) {
    const htmlCardImgClone = htmlCardImg.cloneNode();

    offer.photos.forEach((srcPhoto) => {
      const htmlCardImgCloneCurrent = htmlCardImgClone.cloneNode();
      htmlCardImgCloneCurrent.src = srcPhoto;
      htmlCardPhotos.appendChild(htmlCardImgCloneCurrent);
    });

  } else {
    htmlCardPhotos.classList.add('visually-hidden');
  }
  htmlCardImg.remove();

  if(author.avatar) {
    htmlCardAvatarImg.src = author.avatar;
  } else {
    htmlCardAvatarImg.classList.add('visually-hidden');
  }

  return htmlCardTemplatePopupClone;
};

export { createOfferCard };
