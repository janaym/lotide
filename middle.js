//input 2 arrays, return true if equal, false if not
const eqArrays = function(actual, expected) {
  let isEqual = true;
  const len = actual.length;
  if (expected.length !== len) {
    isEqual = false;
  } else {
    let i = 0;
    while (actual[i] === expected[i] && i < len) {
      i++;
    }
    if (i < len) {
      isEqual = false;
    }
  }
  return isEqual;
};

//input two arrays, asserts if they are equal
const assertArraysEqual = function(actual,expected) {
  const assertion = eqArrays(actual, expected);
  let msg = "Assertion ";
  switch (assertion) {
  case true:
    msg += `Passed 💯💯 [${actual}] === [${expected}]`;
    break;
  case false:
    msg += `Failed ☠️☠️ [${actual}] !== [${expected}]`;
    break;
  }
  console.log(msg);
};

const middle = function(arr) {
  //check odd/even entries
  const len = arr.length;
  let newArr = [];
  if (len > 2) {
    const middleIndex = len / 2;
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

