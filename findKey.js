//assert function for testing
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

//obj:      an object to be scanned
//callback: a function that may oy may not return a truthy value
const findKey = function(obj, callback) {
  for (const key in obj) {
    //console.log(callback(obj[key]));
    if (callback(obj[key])) {
      return key;
    }
  }
};

//testing empty calls
assertEqual(findKey());
assertEqual(findKey({}, x => x === 0), undefined);

const testArr = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

module.exports = findKey;

// assertEqual(findKey(testArr, x => x.stars % 2 === 0), 'noma');
// assertEqual(findKey(testArr, x => 0), undefined); //0 is falsely, should see undefined
// assertEqual(findKey(testArr, x => x.stars === 3), 'Akaleri');
// assertEqual(findKey({1:1,2:2,3:3}, x => true), '1');




