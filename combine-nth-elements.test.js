/**
 * combine-nth-elements.test.js
 * Created by dcorns on 8/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
const expect = require('expect');
const combineNthElements = require('./combine-nth-elements');
it('should take in a two dimensional array and an empty array. Returns a single array containing all the elements of the inner array while maintaining each nth element\'s order with respect to their original array', () => {
  const result = combineNthElements([[3,5,8], [4,2], [4,5,9,23], [7,4,4]],[]);
  expect(result).toEqual([3,4,4,7,5,2,5,4,8,9,4,23]);
});