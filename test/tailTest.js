const assert = require('chai').assert;
const fcns = require('../tail.js');

describe("#head", () => {
  it("does not modifiy the original array", () => {
    testArr = [1,2,3];
    fcns.tail(testArr);
    assert.deepStrictEqual(testArr, [1,2,3]); 
  });
  it("returns an empty array for a one element array", () => {
    assert.deepStrictEqual(fcns.tail([1]), []);
  });
  it("returns an empty array for an empty array", () => {
    assert.deepStrictEqual(fcns.tail([]), []);
  });
  it('returns [2.2, 3.3] for [1.1, 2.2, 3.3]]', () => {
    assert.deepStrictEqual([2.2, 3.3], fcns.tail([1.1, 2.2, 3.3]));
  });
});
