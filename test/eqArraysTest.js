const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');
//Test Case: arrays are empty
assertEqual(eqArrays([],[]), true);

//Test Case: arrays are different length
assertEqual(eqArrays([1,2,3],[1,2,3,4,5]), false);

//Test Case: number arrays

assertEqual(eqArrays([1,2,3,4],[1,2,3,5]), false);
assertEqual(eqArrays([1,2,3,4],[1,2,3,4]), true);
assertEqual(eqArrays([1.5],[1.5]), true);


//Test Case: string arrays

assertEqual(eqArrays(['hi', 'ello', 'yo'],['hi', 'hello', 'yo']), false);
assertEqual(eqArrays(['hi', 'hello', 'yo'],['hi', 'hello', 'yo']), true);

//Test Case: falsey/truthy values  (should be false due to strict equality)
assertEqual(eqArrays([''],[false]), false);
assertEqual(eqArrays(['hello '],[true]), false);
