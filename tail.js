const assertEqual = require('./assertEqual.js')

//implemented function
//input: array
//returns: empty array input array is empty or has only one entry
//returns: copy of the array without the head element otherwise
const tail = function(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return [];
  } else {
    return arr.slice(1);
  }
};

const tester = function(actual, expected) {
  //check arrays are the same size
  if (actual.length !== expected.length) {
    console.log('arrays not the same size');
  //check in case of expected empty array
  } else if (expected.length === 0) {
    if (actual.length ===  0) {
      console.log('yup, both are empty arrays!');
    } else {
      console.log('actual is not an empty array as expected');
    }
  //check elements of arrays one by one
  } else {
    for (let i = 0; i < actual.length; i++) {
      assertEqual(actual[i], expected[i]);
    }
  }
};

module.exports = {tail, tester};




