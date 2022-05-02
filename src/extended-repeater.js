const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strRepeat = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let strSeparator = options.hasOwnProperty('separator') ? options.separator + '' : '+';
  let strAddition = options.hasOwnProperty('addition') ? options.addition + '' : '';
  let addRepeat = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let addSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator + '' : '|';

  let additionArray = [];
  let strArray = [];

  for (let i = 0; i < addRepeat; i++) {
    additionArray.push(strAddition);
  }
  let additionResult = additionArray.join(addSeparator);

  for (let i = 0; i < strRepeat; i++) {
    strArray.push(str+additionResult);
  }
  let result = strArray.join(strSeparator);
  return result;
}

module.exports = {
  repeater
};
