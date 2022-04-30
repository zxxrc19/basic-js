const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let result = 0;
  let digits = [];
  while (n) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    let num = 0;
    for (let k = digits.length - 1; k >= 0; k--) {
        if (k !== i) {
          num = num * 10 + digits[k];
        }
    }
    result = Math.max(num, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
