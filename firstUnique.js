/**
 * test
 * Created by dcorns on 7/23/21
 * Copyright © 2021 Dale Corns
 * MIT Licensed
 * input: string of letters a-z, no spaces
 * output: first letter found that has no duplicate in the string or '' if all letters are duplicated.
 */
const firstUnique = (str) =>{
  let count = [];
  let strAry = str.split('');
  strAry.forEach(ltr => {
    const idx = count.indexOf(ltr);
    if(idx > -1) count[idx + 1]++;
    else count.push(ltr, 1);
  });
  console.log(count);
  const firstIdx = count.indexOf(1) - 1;
  if (firstIdx > -2) return count[firstIdx];
  else return '';
}
console.log(firstUnique('aaabcd'));