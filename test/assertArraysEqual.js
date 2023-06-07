const assertArraysEqual = require('../assertArraysEqual.js');

console.log(`${[1,2,[3,4],1]}`);
//Test Case: empty arrays
assertArraysEqual([],[]);

//Test Case: different length array
assertArraysEqual([1],[1,2]);

//Test Case: arrays of same length
assertArraysEqual([1], [1]);
assertArraysEqual([1,2], [1,2]);
assertArraysEqual(['hi','hello'], ['hi','hello']);
assertArraysEqual(['hi','hello'], ['hi','ello']);
