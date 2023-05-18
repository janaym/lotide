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

//input array of various values and/or non-nested arrays, and returns on
const flatten = function(arr) {
  let newArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        newArr.push(subItem);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}


//Test Case: does not modify original array (cannot use assertArraysEqual as it cannot handle nested arrays.)
let testArr = [1,2,3,[4,5]];
flatten(testArr);
console.log(testArr); //should be [1,2,3,[4,5]] still. 

//Test Case: does nothing to already flattened array
assertArraysEqual(flatten([1,2,3,"hi", "hello", true, false]), [1,2,3,"hi", "hello", true, false]);

//Test Case: handles empty array
assertArraysEqual(flatten([]),[]);
assertArraysEqual(flatten([[],1]),[1]);

//Test Case: handles flattening arrays anyhwere in array
assertArraysEqual(flatten([[1,2,true], false, ['a', false], [], 500]), [1,2,true,false,'a',false,500]);

//Test Case: handles big subarray
assertArraysEqual(flatten([[1,2,3,4,5]]), [1,2,3,4,5]);

console.log(typeof [1,2,3]);