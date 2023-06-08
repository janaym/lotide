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

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //console.log(item);

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;

// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

// assertEqual(result1['Jason'], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
