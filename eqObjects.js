// assert equal
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
        console.log(eqArrays(value1,value2), value1, value2);
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  //if we get here, objects are the same
  return true;
};

const shirtObject1 = { color: 'red', size: 'medium'};
const shirtObject2 = { size: 'medium', color: 'red'};
assertEqual(eqObjects(shirtObject1, shirtObject2), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject1, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false