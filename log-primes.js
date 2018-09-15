/**
 * log-primes
 * Created by dcorns on 9/14/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
const logPrimes = (range) => {
  const primes = [];
  let factors = 1;
  for(let i = 2;i<=range;i++){
    for(let ii = 2; ii <= range; ii++){
      if (i%ii === 0) factors++;
    }
    if(factors < 3){
      console.log(i);
    }
    factors=1;
  }
};
logPrimes(1000);
