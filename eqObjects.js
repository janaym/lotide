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

const eqObjects = function(object1, object2) {
  
  //first check objects have same # of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log('different amnt of keys');
    return false;

  //then check if all keys have same entry/or if objects have different keys
  } else {
    for (item in object1) {
      console.log(object1[item], object2[item])
      if (object2[item] !== object1[item]) {
        return false;
      }
    }
  }
  //if we get here, objects are the same
  return true;
};

const shirtObject1 = { color: 'red', size: 'medium'};
const shirtObject2 = { size: 'medium', color: 'red'};
assertEqual(eqObjects(shirtObject1, shirtObject2), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject1, longSleeveShirtObject), false);