// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumTotal = 0;
var squareTotal = 0;

for(var i = 1; i <= 100; i++) {
	sumTotal += i*i
	squareTotal += i
}

squareTotal = squareTotal*squareTotal

console.log(squareTotal - sumTotal);

// square total = 25502500
// sum total = 338350
// 25164150
