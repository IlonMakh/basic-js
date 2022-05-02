const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  for(let domain of domains) {
    keysArray = domain.split('.').reverse();
    key = '';

    for (let element of keysArray) {
      key += `.${element}`;
      if(!object.hasOwnProperty(key)) {
        object[key] = 1;
      }
      else {
        object[key]++;
      }
    }
  }
  return object;
}

module.exports = {
  getDNSStats
};
