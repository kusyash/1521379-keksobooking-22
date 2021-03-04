// https://learn.javascript.ru/task/random-int-min-max
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

export {
  getRandomInteger,
  getRandomFloat
}
