//input 2 arrays, return true if equal, false if not
const eqArrays = require('./eqArrays.js');

//input two arrays, asserts if they are equal
const assertArraysEqual = require('./assertArraysEqual.js');

const middle = function(arr) {
  //check odd/even entries
  const len = arr.length;
  let newArr = [];
  if (len > 2) {
    const middleIndex = len / 2;
    console.log(middleIndex)
    switch (arr.length % 2) {
    case 0:
      newArr = arr.slice(middleIndex - 1, middleIndex + 1);
      break;
    case 1:
      newArr = arr.slice(middleIndex, middleIndex + 1);
      break;
    }
  }
  return newArr;
};

module.exports = middle;