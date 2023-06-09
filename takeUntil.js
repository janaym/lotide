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
//assertion fcn for testing
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

//array:    array of items to be sliced
//callback: function that has a condition that returns a truthy value
const takeUntil = function(array, callback) {
  let sliceArr = [];
  
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      sliceArr.push(item);
    }
  }
  return sliceArr;
};

module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // console.log(results2);

// assertArraysEqual(takeUntil([], x => x % 1 === 0),[]);  //handles empty input
// assertArraysEqual(takeUntil([true, false, 'hi', 5], x => typeof(x) === 'number'),[true, false, 'hi']);//no special cases
// assertArraysEqual(takeUntil([1,2,3,4,5], x => 0), [1,2,3,4,5]); //callback never returns truthy value
// assertArraysEqual(takeUntil([1,2,3,4,5], x => 5), []); //5 is a truthy value so nothing is pushed
// assertArraysEqual(takeUntil(['a','b','c','d'], let => let === 'c'), ['a','b']); //truthy returned in middle of array
