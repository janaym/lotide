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

const without = function (srcArr, itemsToRemoveArr) {
  let newArr = [];
  for (let item of srcArr) {
    let toRemove = false;
    for (let remove of itemsToRemoveArr) {
      if (item === remove) {
        toRemove = true;
        break;
      }
    }
    if (!toRemove) {
      newArr.push(item);
    }
  }
  return newArr;
}
/*
//input array and target element, return new array without any instances of target
const without = function(arr, targets) {
  //check a target was give, return original array otherwise
  if (!targets) {
    return arr;
  }
  //iterate through items, add to new arr if not a target
  let newArr = [];
  for (const item of arr) {
    
    let i = 0;
    //check if item is any of the targets
    while (item !== targets[i] && i < targets.length) {
      i++;
    }
    //if we got all the way through the target list, then item is not a target
    if (i === targets.length) {
      newArr.push(item);
    }
  }

  return newArr;
};
*/

module.exports = without;


// //Test Case: normal arrays. checks for removing multiple items too
// assertArraysEqual(without([3,2,3,4, false, "false"],[3, false]), [2,4, "false"]);

// //Test Case: handles empty arrays
// assertArraysEqual(without([3,2,3,4],[]), [3,2,3,4]);
// assertArraysEqual(without([],[2,3,4]), []);


// //Test Case: does not modify original array
// let testArr = [1,2,3,4];
// without(testArr, [2]);
// assertArraysEqual(testArr, [1,2,3,4]);


// //Test Case: returns identical array when target not in array
// assertArraysEqual(without([1,2,3,4], [5, true, 'nothing']), [1,2,3,4]);


// assertArraysEqual(without([1,2,'hi',4], ['hi',2,1]), [4]);

// //Test Case: handles no target given and returns original array
// //assertArraysEqual(without([1,2,3,4]), [1,2,3,4]);
