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

const countLetters = function(sentence) {
  let letterCount = {};

  for (const char of sentence.split('')) {
    if (char !== ' ') {
      
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;

// assertEqual(countLetters('hello')['h'], 1); //handles instance of 1 letter
// assertEqual(countLetters('hello')['i'], undefined); //handles letters not in sentence
// assertEqual(countLetters('hello')['l'], 2); //handles instance of multiple letter
// assertEqual(countLetters('')[1], undefined); // handles empty string
// assertEqual(countLetters(' hello hello ')['l'], 4); //handles strings with spaces
// assertEqual(countLetters(' hello hello ')[' '], undefined); //handles strings with spaces when asked for space char

