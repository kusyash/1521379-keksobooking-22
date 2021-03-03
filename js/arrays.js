import { getRandomInteger } from './numbers.js'

// https://learn.javascript.ru/task/shuffle
const shuffleArray = function(array) {
  let clone = [...array];

  for (let i = clone.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }

  return clone;
}

const getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
}

// https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
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

export {
  shuffleArray,
  getRandomArrayElement,
  getRandomArray
}
