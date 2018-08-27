/**
 * combine-nth-elements
 * Created by dcorns on 8/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Combine each nth elements from each array within an array into one.
 * example: input: [[3,5,8], [4,2], [4,5,9,23], [7,4,4]] output: [3,4,4,7,5,2,5,4,8,9,4,23]
 */

  let ary = [[3,5,8], [4,2], [4,5,9,23], [7,4,4]];
  function combineNthElements(a, b){
    let valid = 0;
    for(let l = 0; l < a.length; l++){
      if(a[l].length > 0){
        b.push(a[l].shift());
      }
      if(a[l].length > 0) valid++;
    }
    if (valid === 0) return b;
    return combineNthElements(a,b);
  }
  console.log(combineNthElements(ary,[]));
  module.exports = combineNthElements;

