// Multiples of 3 and 5
// ===
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

// AKA
// find all the numbers between 1000 that are divisible by 3 or 5 and then add em all up

// start out with zero
var total = 0;

// do a for loop: for(start, end, increment by)
for(var i = 0; i < 1000; i++) {
  // use modulus operation to find if 3 or 5 goes into `i` an even number of times (so that there
  // is no remainder - thats the === 0 part, that there is no leftover)
  if(i % 3 == 0 || i % 5 == 0) {
    // add i to the total if so!
    total += i;
  }
}

console.log(total);
// 233168
