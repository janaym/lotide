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

//input array and target element, return new array without any instances of target
const without = function(arr, target) {
  let newArr = [];
  for (const item of arr) {
    if (item !== target) {
      newArr.push(item);
    }
  }
  return newArr;
};

//Test Case: does not modify original array
let testArr = [1,2,3,4];
without(testArr, 2);
assertArraysEqual(testArr, [1,2,3,4]);

//Test Case: works on empty array
assertArraysEqual(without([],'nothing'), []);

//Test Case: returns identical array when target not in array
assertArraysEqual(without([1,2,3,4], 5), [1,2,3,4]);

/*
Test Case: removes numbers, strings, booleans
also checks for removing multiple instances of target
also checks for removing 1st and last element 
*/
assertArraysEqual(without([1,2,3,4], 3), [1,2,4]);
assertArraysEqual(without(['a', 'bb', 'c'], 'c'), ['a','bb']);
assertArraysEqual(without([true, 'hi', true, 3], true), ['hi', 3]);

//Test Case: handles no target given
assertArraysEqual(without([1,2,3,4]), [1,2,3,4]);
