'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, num) {
      this.result = operation(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
}

module.exports = makeCalculator;
