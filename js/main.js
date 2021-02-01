// https://learn.javascript.ru/task/random-int-min-max
/*eslint no-unused-vars: "error"*/
// eslint-disable-next-line no-unused-vars
function randomInteger(min, max) {
  min = Number(min);
  max = Number(max);
  if(
    min >= 0
    && max >= 0
    && min < max
  ) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    return false;
  }
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// eslint-disable-next-line no-unused-vars
function randomFloat(min, max, precision = 2) {
  min = Number(min);
  max = Number(max);
  precision = parseInt(precision);
  if(
    min >= 0
    && max >= 0
    && min < max
    && precision >= 0
  ) {
    let rand = min + Math.random() * (max - min);
    let result = rand.toFixed(precision) - 0;
    return result > max ? max : result;
  } else {
    return false;
  }
}
