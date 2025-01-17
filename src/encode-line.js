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
function encodeLine(str) {
  let result = [],
      count = 1;
      
  for (let i = 0; i <= str.length; i++) {
    let currentLetter = str[i],
        nextLetter = str[i+1];
    
    if (currentLetter === nextLetter) {
      count++;
    }

    else {

      if (count !== 1) {
        result.push(count);
        result.push(currentLetter);
        count = 1;
      }
      else {
        result.push(currentLetter);
      }
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
