// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// TODO : write a algorithm that finds prime numbers, keep track of
// how many you've found and then stop at the 10,001st

const value = 100000

function printPrime(value) {
	var primes = [];
	for(var i = 2; i < value; i++) {
		primes[i] = true;
	}

	var limit = Math.sqrt(value);
	for(var i = 2; i < limit; i++) {
		if(primes[i] === true) {
				for(var j = i * i; j < value; j += i) {
						primes[j] = false;
				}
		}
	}

	for(var i = 2; i < value; i++) {
		if(primes[i] === true) {
			console.log(i + " " + primes[i]);
		}
	}
}
