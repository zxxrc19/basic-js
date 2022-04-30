const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let len = str.length;
  let s =''
  for (let i = 0; i < len; i++)
  {
      let count = 1;
      while (i < len - 1 && str[i] == str[i+1])
      {
          count++;
          i++;
      }
      if(count ===1){
        count =''
      }
      s += count + str[i];
  }
  return s;
}

module.exports = {
  encodeLine
};
