//input 2 arrays, return true if equal, false if not
const eqArrays = function(actual, expected) {
  let isEqual = true;
  const len = actual.length;
  if (expected.length !== len) {
    isEqual = false;
  } else {
    let i = 0;
    while (actual[i] === expected[i] && i < len) {
      i++;
    }
    if (i < len) {
      isEqual = false;
    }
  }
  return isEqual;
};

const assertArraysEqual = function(actual,expected) {
  const assertion = eqArrays(actual, expected);
  let msg = "Assertion ";
  switch (assertion) {
  case true:
    msg += `Passed 💯💯 [${actual}] === [${expected}]`;
    break;
  case false:
    msg += `Failed ☠️ ☠️  [${actual}] !== [${expected}]`;
    break;
  }
  console.log(msg);
};



//array:    array of items to be mapped
//callback: function with which to map items
const map = function(array, callback) {
  //console.log(`array: ${array}, callback: ${callback}`);
  const results = [];
  for (item of array) {
    //console.log(`item before: ${item}
   // item after: ${callback(item)}`);
   results.push(callback(item));
  }

  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);


// assertArraysEqual(results1, ['g','c','t','m','t']);//string functio
// assertArraysEqual(map([]), []); //empty array w/ no callback fcn
// assertArraysEqual(map([2,5], x => x ** 2 ), [4,25] ); //math function
// assertArraysEqual(map([4,6,8,7], x => x%2 === 0), [true,true,true,false]) //logical expression function
// // assertArraysEqual(map([]), =>);