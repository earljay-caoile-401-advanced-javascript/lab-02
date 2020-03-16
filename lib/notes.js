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
    this.action = input.action;
    this.payload = input.payload;
  
    const action = input.action.toLowerCase();
    switch (action) {
      case 'add':
        this.add(input);
        break;
      default:
        break;
    }
  }

  /**
   * takes an input object and and console logs the text
   * @param {object} input  object payload received from constructor
   * @return {void}
   */
  add(input) {
    const addObj = {
      id: uuid(),
      text: input.payload,
    };
  
    console.log('adding the following:', addObj.text);
  }
}
module.exports = input => new Notes(input);
