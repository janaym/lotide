const assertEqual = require ('./assertEqual.js');
//checks if two arrays are equal
const eqArrays = function(actual, expected) {
  //check if arrays are the same length
  let isEqual = true;
  const len = actual.length;
  if (expected.length !== len) {
    isEqual = false;

  //itereate through array
  //stop if you reach an element that's not equal
  } else {
    let i = 0;
    while (actual[i] === expected[i] && i < len) {
      i++;
    }
    //check if we stopped early
    if (i < len) {
      isEqual = false;
    }
  }
  return isEqual;
};
module.exports = eqArrays;





