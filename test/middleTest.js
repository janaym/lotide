//const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');
const assert = require('chai').assert;

// //Test Case: no special case
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1,2,3,4,5]), [3]);
// assertArraysEqual(middle(['one', true, false, 4, 5]), [false]);

// //Test Case: function does not modify origial array
// let testArr = [1,2,3,4];
// middle(testArr);
// assertArraysEqual(testArr,[1,2,3,4]);

// //Test Case: handles empty array
// assertArraysEqual(middle([]),[]);

// //Test Case: handles double and single entry array
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1,2]), []);

describe('#middle', () => {
  it('does not modify the original array', () => {
    testArr = [1,2,3];
    middle(testArr);
    assert.deepStrictEqual(testArr, [1,2,3]); 
  });
  it('returns [2,3] for [1,2,3,4]', () => {
    assert.deepStrictEqual([2,3],  middle([1,2,3,4]));
  });
  it('returns [3] for [1,2,3,4,5]', () => {
    assert.deepStrictEqual([3], middle([1,2,3,4,5]));
  });
  it('returns and empty array when given an empty array', () => {
    assert.deepStrictEqual([], middle([]));
  });
  it("returns an empty array when given a single item array", () => {
    assert.deepStrictEqual([], middle(['hello']));
  });
  it("returns an empty array when given a two-entry array", () => {
    assert.deepStrictEqual([], middle(['hi', 'hello']));
  })

});