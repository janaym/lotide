const head = require('./head.js');
const tail   = require('./tail').tail;
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual.js');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');
const countLetters = require('./countLetters.js');
const countOnly = require('./countOnly.js');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};