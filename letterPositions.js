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

const assertArraysEqual = function(actual,expected) {
  const assertion = eqArrays(actual, expected);
  let msg = "Assertion ";
  switch (assertion) {
  case true:
    msg += `Passed 💯💯 [${actual}] === [${expected}]`;
    break;
  case false:
    msg += `Failed ☠️☠️ [${actual}] !== [${expected}]`;
    break;
  }
  console.log(msg);
};

const letterPositions = function(sentence) {
  const results = {};
  const sentenceChars = sentence.split('');

  for (let i = 0; i < sentenceChars.length; i++) {
    const char = sentenceChars[i];

    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions('hello')['l'], [2,3]); //no special cases
// assertEqual(letterPositions(" hello hello ")[' '], undefined); //handles chars not there and spaces
// assertEqual(letterPositions(" hello hello ")[''], undefined); //handles empty string as target
// assertArraysEqual(letterPositions("hello")['h'], [0]);
// assertArraysEqual(letterPositions('hhhhhhh')['h'], [0,1,2,3,4,5,6]);
// console.log(letterPositions(' hello world!'));