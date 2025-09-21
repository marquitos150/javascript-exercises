const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
	return nums.reduce((sum, current) => sum + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, current) => product * current, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
  result = 1;
  while (n != 0) {
    result *= n;
    n--;
  }
  return result;
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
