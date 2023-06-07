const assert = require('chai').assert;
const fcns = require('../tail.js');
//console.log(fcns)

// const assertEqual = require('../assertEqual');

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// fcns.tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// //Test Case: empty and one element array yields empty array
// fcns.tester(fcns.tail([0]), []);
// fcns.tester(fcns.tail([]), []);

// //Test Case: check the fcns.tail function works in the standard case
// fcns.tester(fcns.tail([1.1, 2.2, 3.3]), [2.2, 3.3]);
// //If fcns.tester is woring properly this should show the arrays are not the same
// fcns.tester(fcns.tail([1, 2, 3, 4]), [1, 2, 3]);
// //If fcns.tester is working properly, this should show that the arrays are not the same size
// fcns.tester(fcns.tail([1, 2, 3, 4]), [1, 3]);

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
