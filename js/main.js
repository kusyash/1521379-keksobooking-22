const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const HOURS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const IMAGES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const TITLES = [
  'Pettyburg',
  'КОТЭ',
  'Милый друг',
  'CAT INN',
  'КОТВИЛЛЬ',
  'ЗооОтель',
  'Гранат',
  'Лесси',
  'BookingCat',
  'Кошки в дом',
];
const DESCRIPTIONS = [
  'Лучшая гостиница для животных в Санкт-Петербурге для кошек, собак, хорьков, кроликов, морских свинок, грызунов, птиц.',
  'Гостиница для животных КОТЭ предлагает одни из самых низких цен в городе, удобный трансфер.',
  'В нашем отеле для собак и кошек всегда открыты двери для питомцев, чьи хозяева какое-то время не могут осуществлять уход за любимцем. Помимо присмотра и ухода за четвероногим другом, мы оказываем весь спектр услуг, направленный на обеспечение комфорта и удобства для наших гостей и их хозяев.',
  'Забудьте про волнение и переживания за ваших питомцев во время отъезда',
  'Большие уютные номера с системой вентиляции. Одни из самых больших в Санкт-Петербурге.',
  'Наша зоогостиница - это хорошее место, где Вы спокойно можете оставить своего питомца, если Вам необходимо уехать в отпуск, командировку, сделать ремонт в квартире, да мало ли, что еще...',
  'Зоогостинница "Гранат" - это гостинница для собак и кошек премиум класса',
  'Работаем с 1998 года. Клубная частная  структура организации качественного, полноценного, курортного отдыха для животных в экологически чистой зоне. Восполняем то, чего так не хватает в городе: свежий воздух, разнообразные прогулки, игры и плавание.',
  'BookingCat – первая уникальная сеть отелей для питомцев. Мы предоставляем услуги по проживанию питомцев на период отпуска, командировки, болезни, ремонта и переезда владельца. Наши гости - это котики, собачки мелких пород, кролики, грызуны, птицы, и рыбки.',
  'Уютная гостиница для домашних животных «Кошки в Дом» расположилась центре Петербурга. Мы создавали душевное место для размещения домашних любимцев, где питомец будет чувствовать себя комфортно, пока хозяева отдыхают на море или находятся в командировке.',
];


// https://learn.javascript.ru/task/random-int-min-max
// eslint-disable-next-line no-unused-vars
const getRandomInteger = function(min, max) {
  if(
    min >= 0
    && max >= 0
    && max >= min
  ) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return false;
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// eslint-disable-next-line no-unused-vars
const getRandomFloat = function(min, max, precision = 2) {
  precision = parseInt(precision);
  if(
    min >= 0
    && max >= 0
    && max >= min
    && precision >= 0
  ) {
    let rand = min + Math.random() * (max - min);
    let result = rand.toFixed(precision) - 0;
    return result > max ? max : result;
  }
  return false;
}

// https://learn.javascript.ru/task/shuffle
// eslint-disable-next-line no-unused-vars
const shuffleArray = function(array) {
  let clone = [...array];

  for (let i = clone.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }

  return clone;
}

// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
}

// https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
// eslint-disable-next-line no-unused-vars
const getRandomArray = function (array, count = 0) {
  let arr = [];
  let mix = shuffleArray(array);

  if(count <= 0) {
    count = getRandomInteger(1, mix.length);
  } else if(count < 1) {
    count = 1;
  } else if (count > mix.length) {
    count = mix.length;
  }

  for (let i = 0; i < count; i++) {
    arr.push(mix[i]);
  }

  return arr;
}

const generateOffer = function () {
  let item = {}

  // - author
  item.author = {};
  item.author.avatar = `img/avatars/user0${getRandomInteger(1, 8)}.png`;

  // - offer properties
  item.offer = {};
  item.offer.title = getRandomArrayElement(TITLES);
  item.offer.description = getRandomArrayElement(DESCRIPTIONS);
  item.offer.address = getRandomFloat(35.65, 35.7, 5).toString() + ', ' + getRandomFloat(139.7, 139.8, 5).toString();
  item.offer.price = getRandomInteger(100, 5000);
  item.offer.type = getRandomArrayElement(TYPES);
  item.offer.rooms = getRandomInteger(10, 100);
  item.offer.guests = getRandomInteger(50, 500);
  item.offer.checkin = getRandomArrayElement(HOURS);
  item.offer.checkout = getRandomArrayElement(HOURS);
  item.offer.features = getRandomArray(FEATURES);
  item.offer.photos = getRandomArray(IMAGES);

  // - location
  item.location = {};
  item.location.x = getRandomFloat(35.65, 35.7, 5);
  item.location.y = getRandomFloat(139.7, 139.8, 5);

  return item;
}

// eslint-disable-next-line no-unused-vars
const generateData = function () {
  let items = [];

  for (let i = 0; i < 10; i++) {
    items.push(generateOffer());
  }

  return items;
}
