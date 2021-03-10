import { HOUSES_TYPES, FEATURES } from './constants.js';

const htmlCardTemplate = document.querySelector('#card').content;

const createOfferCard = ({offer, author}) => {

  const htmlCardTemplateClone = htmlCardTemplate.querySelector('.popup').cloneNode(true);

  const htmlCardTitle = htmlCardTemplateClone.querySelector('.popup__title');
  const htmlCardAddress = htmlCardTemplateClone.querySelector('.popup__text--address');
  const htmlCardPrice = htmlCardTemplateClone.querySelector('.popup__text--price');
  const htmlCardType = htmlCardTemplateClone.querySelector('.popup__type');
  const htmlCardCapacity = htmlCardTemplateClone.querySelector('.popup__text--capacity');
  const htmlCardTime = htmlCardTemplateClone.querySelector('.popup__text--time');
  const htmlCardDescription = htmlCardTemplateClone.querySelector('.popup__description');
  const htmlCardFeatures = htmlCardTemplateClone.querySelector('.popup__features');
  const htmlCardPhotos = htmlCardTemplateClone.querySelector('.popup__photos');
  const htmlCardImg = htmlCardTemplateClone.querySelector('.popup__photo');
  const htmlCardAvatarImg = htmlCardTemplateClone.querySelector('.popup__avatar');

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

  if(offer.photos) {
    offer.photos.forEach((srcPhoto, keyPhoto) => {
      if(keyPhoto === 0) {
        htmlCardImg.src = srcPhoto;
      } else {
        const htmlCardImgClone = htmlCardImg.cloneNode(true);
        htmlCardImgClone.src = srcPhoto;
        htmlCardPhotos.appendChild(htmlCardImgClone);
      }
    });
  } else {
    htmlCardPhotos.classList.add('visually-hidden');
  }

  if(author.avatar) {
    htmlCardAvatarImg.src = author.avatar;
  } else {
    htmlCardAvatarImg.classList.add('visually-hidden');
  }

  return htmlCardTemplateClone;
};

export { createOfferCard };
