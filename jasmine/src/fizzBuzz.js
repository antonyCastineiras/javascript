function FizzBuzz() {
}

FizzBuzz.prototype.play = function(n) {
	fizz = "fizz"
	buzz = "buzz"
	if (n % 3 === 0 && n % 5 === 0) { return fizz + buzz } else if (n % 3 === 0) { return fizz } else if ( n % 5 === 0) { return buzz } else { return n } 
}