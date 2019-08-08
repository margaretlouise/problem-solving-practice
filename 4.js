// A palindromic number reads the same both ways. The largest palindrome 
// made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let foundPalindrome = 0;

for(var i = 999; i >= 100; i--) {
	for(var j = 999; j >= 100; j--) {
		var numberToCheck = i*j;

		var isPalindrome = isItAPalindrome(numberToCheck);

		if (isPalindrome) {
			if (numberToCheck > foundPalindrome) {
				foundPalindrome = numberToCheck
			}
		}
	}
}

function isItAPalindrome(numberToTest) {
	const array = numberToTest.toString(10).split("");

	if ((array[0] == array[5]) && (array[1] == array[4]) && (array[2] == array[3])) {
		return true
	} else {
		return false
	}
};

console.log(foundPalindrome);