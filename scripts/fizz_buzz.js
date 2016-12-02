"use strict";

function isDivisibleBy(divident) {
	return function(divider) {
		
		if (divider == 0) return false; // special case

		return (divider % divident) == 0 ? true : false;
	}
}

var isDivisibleBy3 = isDivisibleBy(3);
var isDivisibleBy5 = isDivisibleBy(5);

console.log("if div by 3 ==> 'Fizz'; if div by 5 but not by 3 ==> 'Buzz':");
for (var i = 0; i < 100; ++i) {

	if ( isDivisibleBy5(i) && !isDivisibleBy3(i)) {
		console.log('Buzz(' + i + ')   <==  ' + isDivisibleBy5(i) + ' ' + isDivisibleBy3(i));
	}
	else if ( isDivisibleBy3(i) ) {
		console.log('Fizz(' + i + ')   <==  ' + isDivisibleBy5(i) + ' ' + isDivisibleBy3(i));
	}
	
}

console.log("if div by 3 and by 5 'FizzBuzz':");
for (var i = 0; i < 100; ++i) {

	if ( isDivisibleBy5(i) && isDivisibleBy3(i) ) {
		console.log('FizzBuzz(' + i + ')  <==  ' + isDivisibleBy5(i) + ' ' + isDivisibleBy3(i));
	}

}