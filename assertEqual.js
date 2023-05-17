// FUNCTION IMPLEMENTATION
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

// TEST CODE

assertEqual(1, 2);
assertEqual("hello, world", "hello, world");
assertEqual('hello, world', 'hello, planet');
assertEqual(10.5, 10.5);
assertEqual(true, true);
assertEqual(true, false);