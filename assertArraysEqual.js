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

//Test Case: empty arrays
assertArraysEqual([],[]);

//Test Case: different length array
assertArraysEqual([1],[1,2]);

//Test Case: arrays of same length
assertArraysEqual([1,2], [1,3]);
assertArraysEqual([1,2], [1,2]);
assertArraysEqual(['hi','hello'], ['hi','hello']);
assertArraysEqual(['hi','hello'], ['hi','ello']);

//Test Case: 