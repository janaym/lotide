//for testing
const assertEqual = function(actual, expected) {
  const assertion = actual === expected;
  let msg = "Assertion ";
  switch (assertion) {
  case true:
    msg += `Passed 💯💯 ${actual} === ${expected}`;
    break;
  case false:
    msg += `Failed ☠️☠️ ${actual} !== ${expected}`;
    break;
  }
  console.log(msg);
};


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
assertEqual(eqArrays([],[]), true);

//Test Case: arrays are different length
assertEqual(eqArrays([1,2,3],[1,2,3,4,5]), false);

//Test Case: number arrays

assertEqual(eqArrays([1,2,3,4],[1,2,3,5]), false);
assertEqual(eqArrays([1,2,3,4],[1,2,3,4]), true);
assertEqual(eqArrays([1.5],[1.5]), true);


//Test Case: string arrays

assertEqual(eqArrays(['hi', 'ello', 'yo'],['hi', 'hello', 'yo']), false);
assertEqual(eqArrays(['hi', 'hello', 'yo'],['hi', 'hello', 'yo']), true);

//Test Case: falsey/truthy values  (should be false due to strict equality)
assertEqual(eqArrays([''],[false]), false);
assertEqual(eqArrays(['hello '],[true]), false);





