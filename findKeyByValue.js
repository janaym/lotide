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

const findKeyByValue = function (obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  police: "Brooklyn Nine-Nine"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined); //handles empty target
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); //returns the first key that works
assertEqual(findKeyByValue({}, "hello"), undefined); //handles empty object




/*
maybe ask mentor re: better test cases
does not handle arrays in object, assume this is as before - not to be implemented.

testObj = {
  one: "one",
  two: 1,
  yup: [1,2,3,4]
}
assertEqual(findKeyByValue(,), );
assertEqual(findKeyByValue(,), );
assertEqual(findKeyByValue(,), );
assertEqual(findKeyByValue(,), );
assertEqual(findKeyByValue(,), );
assertEqual(findKeyByValue(,), );
*/
