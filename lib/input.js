'use strict';

/**
 * Represents an input.
 * @constructor
 * @param {object} input - user input from process.argv.slice(2)
 */
class Input {
  constructor(input) {
    const minimistArgs = require('minimist')(input);
    if (this.valid(minimistArgs)) {
      this.action = 'add';
      this.payload = minimistArgs.a;
    }
  }

  valid(minimistArgs) {
    if (!minimistArgs.hasOwnProperty('a')) {
      throw 'error: invalid flag';
    }

    if (!minimistArgs.a || !minimistArgs.a.length) {
      throw 'error: no text';
    }

    return true;
  }
}
module.exports = input => new Input(input);
