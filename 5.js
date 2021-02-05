// 2520 is the smallest number that can be divided by each of
// the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?

// start looping through a big set of numbers, starting at 20
// with the hope that we'll return before we reach the max
for(var i = 20; i < 25000000; i++) {
  // loop through numbers 2 through 20 for our divisors
  var isDivisible = false;
  for(var j = 2; j <= 20; j++) {
    if (i % j == 0) {
      isDivisible = true
    } else {
      isDivisible = false;
      break;
    }
  }

  if (isDivisible) {
    return i;
  }
}

console.log(i);


// solution found online, never got the above to work :(
var e = 20;
 
while (e %  2 != 0 || e %  3 != 0 || e %  4 != 0 || e %  5 != 0 ||
         e %  6 != 0 || e %  7 != 0 || e %  8 != 0 || e %  9 != 0 ||
         e % 10 != 0 || e % 11 != 0 || e % 12 != 0 || e % 13 != 0 ||
         e % 14 != 0 || e % 15 != 0 || e % 16 != 0 || e % 17 != 0 ||
         e % 18 != 0 || e % 19 != 0 || e % 20 != 0 ){
    e += 20;
}

console.log(e)
// 232792560