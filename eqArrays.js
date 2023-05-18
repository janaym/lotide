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

//Test Case: arrays are empty
console.log(eqArrays([],[]));

//Test Case: arrays are different length
console.log(eqArrays([1,2,3],[1,2,3,4,5]));

//Test Case: number arrays
console.log(eqArrays([1,2,3,4],[1,2,3,5]));
console.log(eqArrays([1,2,3,4],[1,2,3,4]));
console.log(eqArrays([1.5],[1.5]));

//Test Case: string arrays
console.log(eqArrays(['hi', 'elllo', 'yo'],['hi', 'hello', 'yo']));
console.log(eqArrays(['hi', 'hello', 'yo'],['hi', 'hello', 'yo']));

//Test Case: falsey/truthy values  (should be false due to strict equality)
console.log(eqArrays([''],[false]));
console.log(eqArrays(['hello '],[true]));





