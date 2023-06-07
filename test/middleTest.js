const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

//Test Case: no special case
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle(['one', true, false, 4, 5]), [false]);

//Test Case: function does not modify origial array
let testArr = [1,2,3,4];
middle(testArr);
assertArraysEqual(testArr,[1,2,3,4]);

//Test Case: handles empty array
assertArraysEqual(middle([]),[]);

//Test Case: handles double and single entry array
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);