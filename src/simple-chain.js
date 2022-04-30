const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) this.chain.push("null");
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position - 1 >= this.chain.length) {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    } 
    else {
     this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return `( ${this.chain.join(" )~~( ")} )`;
  }
};

module.exports = {
  chainMaker
};
