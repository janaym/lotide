///assertEqual for testing
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

//head function implementation
const head = function(arr) {
  return arr[0];
};

//testing
const testArr = [1,2,3,4,5];
assertEqual(head(testArr), 1);
assertEqual(head(testArr), 2);
//testing empty array
assertEqual(head([]), undefined);
//testing one item array
assertEqual(head(["hi"]), "hi");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
