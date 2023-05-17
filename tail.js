//for testing purposes
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

//implemented function
//input: array
//returns: empty array input array is empty or has only one entry
//returns: copy of the array without the head element otherwise
const tail = function(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return [];
  } else {
    return arr.slice(1);
  }
};

const tester = function(actual, expected) {
  //check arrays are the same size
  if (actual.length !== expected.length) {
    console.log('arrays not the same size');
  //check in case of expected empty array
  } else if (expected.length === 0) {
    if (actual.length ===  0) {
      console.log('yup, both are empty arrays!');
    } else {
      console.log('actual is not an empty array as expected');
    }
  //check elements of arrays one by one
  } else {
    for (let i = 0; i < actual.length; i++) {
      assertEqual(actual[i], expected[i]);
    }
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case: empty and one element array yields empty array
tester(tail([0]), []);
tester(tail([]), []);

//Test Case: check the tail function works in the standard case
tester(tail([1.1, 2.2, 3.3]), [2.2, 3.3]);
//If tester is woring properly this should show the arrays are not the same
tester(tail([1, 2, 3, 4]), [1, 2, 3]);
//If tester is working properly, this should show that the arrays are not the same size
tester(tail([1, 2, 3, 4]), [1, 3]);


