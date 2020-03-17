'use strict';

const noteObj = require('../lib/notes.js');

beforeEach(() => {
  jest.spyOn(global.console, 'log');
  console.log = jest.fn();
});

describe('note object', () => {
  it('console logs', () => {
    const inputObj = {
      action: 'add',
      payload: 'I like green eggs and ham!',
    };

    noteObj(inputObj);
    expect(console.log).toHaveBeenCalled();
  });

  it('does not console log for a non-add', () => {
    const inputObj = {
      action: 'subtract',
      payload: 'I like green eggs and ham!',
    };

    noteObj(inputObj);
    expect(console.log).not.toHaveBeenCalled();
  });
});
