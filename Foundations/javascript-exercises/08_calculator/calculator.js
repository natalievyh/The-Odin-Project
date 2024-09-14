const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
	return array.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 0) { return 1; }
	a *= factorial(a - 1);
	return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
