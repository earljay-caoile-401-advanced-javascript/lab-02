'use strict';

const inputObj = require('../lib/input.js');

describe('input', () => {
  it('handle objects with the proper -a flag', () => {
    const input1 = ['-a', 'testing 1-2-3'];
    const input2 = ['-a', 'I like green eggs and ham!'];
    const input3 = ['-a', '!@#$%(&'];
    const inputList = [input1, input2, input3];
    inputList.forEach(arr => {
      expect(inputObj(arr)).toEqual({
        action: 'add',
        payload: arr[1],
      });
    });
  });

  it('throws errors for invalid input', () => {
    const input1 = ['-b', 'testing 1-2-3'];
    const input2 = ['-a'];
    const input3 = ['-a', ''];
    const input4 = ['-a', 1234];

    const inputList = [input1, input2, input3, input4];
    inputList.forEach(arr => {
      if (arr[0] !== '-a') {
        expect(() => inputObj(arr)).toThrowError('error: invalid flag');
      } else if (!arr[1]) {
        expect(() => inputObj(arr)).toThrowError('error: no text');
      }
    });
  });
});
