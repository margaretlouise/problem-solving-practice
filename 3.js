// A prime number is a number that cannot be divided by any other number
// A prime factor would be any prime number which is a factor of a given number

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//TODO: uncomment
// var max = 600851475143 / 2;
var max = 50

// put values you've checked as prime here (not necessary, just find its multiples up to the max and put them in the set )
var primeSet = new Set();

// collect all the non primes here
var nonPrimeSet = new Set();

var largestPrime = 0;

for(var i = 2; i < max; i++) {
  // 2,3,4,5,6,7
  if (i === 2) {
    primeSet.add(i)
  } else if ((i !== 2) && (i % 2 === 0)) {
    nonPrimeSet.add(i);
  } else {
    primeSet.add(i);
  }
}

// var numbersWeMultiplied = [2,3,4,5,7,11]
// var nonPrimes = [4,6,8,10,12,14,16,18,20,6,9,12]


console.log('non prime numbers', nonPrimeSet);
console.log('prime numbers', primeSet);
//console.log(largestPrime);
//
