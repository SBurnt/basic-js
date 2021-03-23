const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(mas) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  if (Array.isArray(mas)) {
    mas.filter((el) => {
      if (typeof el == 'string') {
        let newEl = el.trim().toUpperCase();
        res.push(newEl[0]);
      }
    });
    console.log('resSort ', res.sort().join(''));
    return res.sort().join('');
  } else {
    return false;
  }
};
