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
  const mix = shuffleArray(array);
  return mix.slice(0, count);
}

export {
  shuffleArray,
  getRandomArrayElement,
  getRandomArray
}
