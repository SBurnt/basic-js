const CustomError = require('../extensions/custom-error');

module.exports = function countCats(arrs) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;

  arrs.map((item) => {
    item.filter((cat) => {
      if (cat === '^^') {
        cats++;
      }
    });
  });

  return cats;
};
