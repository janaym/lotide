# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @janaym/lotide`

**Require it:**

`const _ = require('@janaym/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertEqual()`: compares two items (not arrays or objects), asserts whether they are strictly equal, and console logs the result.
* `assertArraysEqual()`: compares two arrays, asserts whether each of their respective entries are strictly equal, and console logs the result.
* `assertObjectsEqual()`: compares two objects, and asserts whether they have equal keys and that each key's respective values are strictly equal to each other. Console logs the result.
* `countLetters()`: Takes a string and returns a object containing a count of each character in the string, not including the space character.
* `countOnly()`: Takes in an array and an object. Returns an object containing a count of each item listed by the object, in the array.
* `eqArrays()`: Takes in two arrays and returns true if their items are strictly equal and ordered equally. Returns false otherwise.
*`eqObjects()`: Takes in two objects and returns true if they contain the same key: values pairs.
* `findKey()`: Takes an object and a callback. Scans the object and returns the first key for which the callback function returns a truthy value. Returns undefined if no such key is found. 
* `findKeyByValue()`: Takes an object an a value. Returns the first key in a given object whose value is the input value.
* `flatten()`: Takes in an array that may contain other nested arrays. Returns a single level array containing every element contained in the input array, 
and any of its n-level nested arrays.
* `head()`: returns the first element of a given array
* `letterPositions()`: Takes in a string and returns an object containing the position(s) at which each character of the string occur.
* `middle()`: returns an array containing the middle element(s) of a given array. If the input array's length is even, the return array contains the middle two elements. If its length is odd, the return array contains the singular middle element.
* `map()`: Takes an array and a callback function. Returns a new array whose items are the result of the callback function.
* `middle()`: returns an array containing the middle element(s) of a given array. If the input array's length is even, the return array contains the middle two elements. If its length is odd, the return array contains the singular middle element.
* `tail()`: returns an array that is all the elements except the first of a given array. Returns [] if the given array is empty or has only one element.
*`takeUntil()`: Takes an array and a callback function. Removes elements from the front of the array until the callback fucntion acting on the array items evaluates to true. 
* `without()`: Takes a source array and an items to remove array. Returns a new array containing only the source array elements that are not in the to remove array.


