const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(data) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof data != 'string') return false;

  data = parseFloat(data);
  if (data <= 0 || data > 15 || isNaN(data)) {
    return false;
  }

  let t = Math.ceil(Math.log(MODERN_ACTIVITY / data) / (0.693 / HALF_LIFE_PERIOD));
  return t;
};
