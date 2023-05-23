
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

//currently cannot compare objects as items
const eqObjects = function(object1, object2) {
  
  //first check objects have same # of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log('different amnt of keys');
    return false;
  }
  
  //then check if all keys have same entry/or if objects have different keys
  for (const item in object1) {
    let value1 = object1[item];
    let value2 = object2[item];

    //check if array comparison needs to be made
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        //console.log(eqArrays(value1,value2), value1, value2);
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  //if we get here, objects are the same
  return true;
};

const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect; //help print legible objects

  const assertion = eqObjects(actual, expected);

  let msg = "Assertion ";
  switch (assertion) {
  case true:
    msg += `Passed 💯💯 ${inspect(actual)} === ${inspect(expected)}`;
    break;
  case false:
    msg += `Failed ☠️☠️ ${inspect(actual)} !== ${inspect(expected)}`;
    break;
  }
  console.log(msg);
};

assertObjectsEqual({},{});
assertObjectsEqual({1:1},{1:'one'});
assertObjectsEqual({colour: 'brown', size: 'medium'},{colour: 'brown', size:'medium'});
assertObjectsEqual({array: [1,2,3]},{array: [1,2,3]});
assertObjectsEqual({array: [1,2,3]},{array: [3,2,1]});
assertObjectsEqual({array: [1,2,3], string: 'hi'}, {array: [1,2,3], string: 'hi'});