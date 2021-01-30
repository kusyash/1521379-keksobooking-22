// https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
  min = Number(min);
  max = Number(max);
  if(
    isNaN(min)
    || isNaN(max)
    || min < 0
    || max < 0
    || min >= max
  ) {
    return false;
  }
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding
/*
function randomFloat(min, max, precision = 2) {
  let rand = min + Math.random() * (max - min);
  // .toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
  let reg = new RegExp('^-?\\d+(?:\\.\\d{0,' + precision + '})?');
  let result = Math.abs(rand.toString().match(reg)[0] - 0);
  return result < min - 0 ? min : result;
}
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function randomFloat(min, max, precision = 2) {
  min = Number(min);
  max = Number(max);
  precision = parseInt(precision);
  if(
    isNaN(min)
    || isNaN(max)
    || isNaN(precision)
    || min < 0
    || max < 0
    || precision < 0
    || min >= max
  ) {
    return false;
  }
  let rand = min + Math.random() * (max - min);
  let result = rand.toFixed(precision) - 0;
  return result > max ? max : result;
}
