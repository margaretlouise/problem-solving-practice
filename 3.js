// A prime number is a number that cannot be divided by any other number
// A prime factor would be any prime number which is a factor of a given number

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


var max = 600851475143;
let movingMax = max;

let i = 2

for(i; i <= movingMax; i++) {
  if (movingMax % i == 0) {
    movingMax = movingMax / i;
    i--;
  }
}

console.log(i);
