// https://learn.javascript.ru/task/random-int-min-max
// eslint-disable-next-line no-unused-vars
const randomInteger = function(min, max) {
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
const randomFloat = function(min, max, precision = 2) {
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
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// eslint-disable-next-line no-unused-vars
const randomArrayKey = function (array) {
  return array[randomInteger(0, array.length - 1)];
}
//console.log(randomArrayKey(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']));//
//console.log(randomArrayKey(['12:00', '13:00', '14:00']));

// https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
// eslint-disable-next-line no-unused-vars
const randomArray = function (array, count = 0) {
  let clone = [...array];
  let arr = [];

  if(count <= 0) {
    count = randomInteger(1, clone.length);
  } else if(count < 1) {
    count = 1;
  } else if (count > clone.length) {
    count = clone.length;
  }

  for (let i = 0; i < count; i++) {
    let key = randomInteger(0, clone.length - 1);
    arr.push(clone[key]);
    clone.splice(key, 1);
  }

  return arr;
}
// console.log(randomArray(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']));
// console.log(randomArray(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], 3));
// console.log(randomArray(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], 11));
// console.log(randomArray(['12:00', '13:00', '14:00']));

// eslint-disable-next-line no-unused-vars
const demoOffers = function () {

  let items = [
    {
      offer: {
        title: 'Pettyburg',
        description: 'Лучшая гостиница для животных в Санкт-Петербурге для кошек, собак, хорьков, кроликов, морских свинок, грызунов, птиц.',
      },
    },
    {
      offer: {
        title: 'КОТЭ',
        description: 'Гостиница для животных КОТЭ предлагает одни из самых низких цен в городе, удобный трансфер.',
      },
    },
    {
      offer: {
        title: 'Милый друг',
        description: 'В нашем отеле для собак и кошек всегда открыты двери для питомцев, чьи хозяева какое-то время не могут осуществлять уход за любимцем. Помимо присмотра и ухода за четвероногим другом, мы оказываем весь спектр услуг, направленный на обеспечение комфорта и удобства для наших гостей и их хозяев.',
      },
    },
    {
      offer: {
        title: 'CAT INN',
        description: 'Забудьте про волнение и переживания за ваших питомцев во время отъезда',
      },
    },
    {
      offer: {
        title: 'КОТВИЛЛЬ',
        description: 'Большие уютные номера с системой вентиляции. Одни из самых больших в Санкт-Петербурге.',
      },
    },
    {
      offer: {
        title: 'ЗооОтель',
        description: 'Наша зоогостиница - это хорошее место, где Вы спокойно можете оставить своего питомца, если Вам необходимо уехать в отпуск, командировку, сделать ремонт в квартире, да мало ли, что еще...',
      },
    },
    {
      offer: {
        title: 'Гранат',
        description: 'Зоогостинница "Гранат" - это гостинница для собак и кошек премиум класса',
      },
    },
    {
      offer: {
        title: 'Лесси',
        description: 'Работаем с 1998 года. Клубная частная  структура организации качественного, полноценного, курортного отдыха для животных в экологически чистой зоне. Восполняем то, чего так не хватает в городе: свежий воздух, разнообразные прогулки, игры и плавание.',
      },
    },
    {
      offer: {
        title: 'BookingCat',
        description: 'BookingCat – первая уникальная сеть отелей для питомцев. Мы предоставляем услуги по проживанию питомцев на период отпуска, командировки, болезни, ремонта и переезда владельца. Наши гости - это котики, собачки мелких пород, кролики, грызуны, птицы, и рыбки.',
      },
    },
    {
      offer: {
        title: 'Кошки в дом',
        description: 'Уютная гостиница для домашних животных «Кошки в Дом» расположилась центре Петербурга. Мы создавали душевное место для размещения домашних любимцев, где питомец будет чувствовать себя комфортно, пока хозяева отдыхают на море или находятся в командировке.',
      },
    },
  ];

  const types = ['palace', 'flat', 'house', 'bungalow'];
  const hours = ['12:00', '13:00', '14:00'];
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const images = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ];

  for (let i in items) {

    // - author
    if(items[i].author === undefined) {
      items[i].author = {};
    }
    items[i].author.avatar = 'img/avatars/user0'+randomInteger(1, 8)+'.png';

    // - offer
    items[i].offer.address = randomFloat(35.65, 35.7, 5).toString() + ', ' + randomFloat(139.7, 139.8, 5).toString();
    items[i].offer.price = randomInteger(100, 5000);
    items[i].offer.type = randomArrayKey(types);
    items[i].offer.price = randomInteger(10, 100);
    items[i].offer.price = randomInteger(50, 500);
    items[i].offer.chekin = randomArrayKey(hours);
    items[i].offer.chekout = randomArrayKey(hours);
    items[i].offer.features = randomArray(features);
    items[i].offer.photos = randomArray(images);

    // - location
    if(items[i].location === undefined) {
      items[i].location = {};
    }
    items[i].location.x = randomFloat(35.65, 35.7, 5);
    items[i].location.y = randomFloat(139.7, 139.8, 5);
  }

  return items;
}
