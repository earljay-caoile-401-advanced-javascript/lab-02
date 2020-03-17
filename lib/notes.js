'use strict';

const uuid = require('uuid').v4;

/**
 * Represents a note.
 * @class
 * @classdesc This is a description of the MyClass class.
 */
class Notes {
  /**
   * Prototype method for a note object
   * @param {object} input - object payload received from constructor
   * @return {void}
   */
  constructor(input) {
    if (this.valid(input)) {
      const action = input.action.toLowerCase();
      switch (action) {
        case 'add':
          this.add(input);
          break;
        default:
          break;
      }
    }
  }

  /**
   * takes an input object and console logs the text
   * @param {object} input  object payload received from constructor
   * @return {void}
   */
  add() {
    this.id = uuid();
    this.text = this.payload;
    console.log('adding the following:', this.text);
  }

  /**
   * takes an input object and determines whether its format is valid
   * @param {object} input  object payload received from constructor
   * @return {void}
   */
  valid(input) {
    if (!input.payload || !input.payload.length) {
      throw 'error: no text';
    }

    return true;
  }
}
module.exports = input => new Notes(input);
