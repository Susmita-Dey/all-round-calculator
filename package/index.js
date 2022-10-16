const { getCurrency } = require("./Functions/Currency");
const doFactorial = require("./Functions/Factorial");
const { doMax, doMin } = require("./Functions/Max.Min.Array");
const { calcAge } = require("./Functions/AgeCalculation");
const { calcLoan } = require("./Functions/LoanCalculation");
const { toDec, toBin, toHex, toOct, toTri } = require("./Functions/RadixConversion");
const { getScientificValue } = require("./Functions/ScientificCalculation");
const { timeCalc } = require("./Functions/TimeCalculation");

/**
 * Returns the sum of two numbers
 *
 * @param {number} num1 The first number to be added.
 * @param {number} num2 The Second Number to be added.
 * @return {number} sum of the two numbers
 */
function doAdd(num1, num2) {
  return num1 + num2;
}

/**
 * Returns the sum of multiple numbers
 *
 * @param {array} ...args Multiple Numbers
 * @return {number} sum of all the numbers passed as arument
 */

function doAddN(...args) {
  const number = args.reduce((a, b) => a + b, 0);
  return number;
}

/**
 * Returns the subtraction of two numbers
 *
 * @param {number} num1 First number
 * @param {number} num2 Second number
 * @return The subtraction of the two numbers
 */
function doSub(num1, num2) {
  return num1 - num2;
}

/**
 * Returns the positive subtraction of two numbers by checking if the first number is bigger or not
 *
 * @param {number} num1 First number
 * @param {number} num2 Second number
 * @return {number} The positive subtraction of the two numbers
 */
function doPositiveSub(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

/**
 * Multiplication of two numbers
 *
 * @param {number} First number
 * @param {number} Second number
 * @return {number} The muliplication of the two numbers
 */
function doMul(num1, num2) {
  return num1 * num2;
}

/**
 * Multiplication of all numbers passed as argument
 *
 * @param {array} Multiple numbers
 * @return {number} Multiplication of all the numbers
 */

function doMulN(...args) {
  const number = args.reduce((a, b) => a * b, 1);
  return number;
}


// Dividing 2 numbers
/**
 * Division of two numbers
 *
 * @param {number} num1 The first number
 * @param {number} num2 The second number
 * @return {number} The Division of the two numbers
 */
function doDiv(num1, num2) {
  return num1 / num2;
}

// reversing number from input
function doReverse(num) {
  num *= -1;
  return num;
}

// add one to input number
function doInc(num, step = 1) {
  return num + step;
}

// decrement input by one
function doDecr(num, step = 1) {
  return num - step;
}

// Getting the modulus
/**
 * Modulus of two numbers
 *
 * @param {number} num1 The first number
 * @param {number} num2 The second number
 * @return {number} The modulus of the two numbers
 */
function doMod(num1, num2) {
  return num1 % num2;
}

// get square root of a number
function root(num) {
  return Math.sqrt(num);
}

// Getting the percentage 
/**
 * percentage of two numbers
 *
 * @param {number} partialValue The first number
 * @param {number} totalValue The second number
 * @return {number} The percentage of the two numbers
 */
function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

// Get the sine of value 
function calculatesin(num) {
  return Math.sin((Math.PI/180)*num);
}

// Export functions
module.exports = {
  doAdd,
  doAddN,
  doSub,
  doPositiveSub,
  doMul,
  doMulN,
  doDiv,
  doMod,
  root,
  percentage,
  calcAge,
  calcLoan,
  timeCalc,
  getCurrency,
  doReverse,
  toHex,
  toBin,
  toOct,
  toTri,
  toDec,
  doDecr,
  doInc,
  getScientificValue,
  doFactorial,
  doMax,
  doMin,
  calculatesin,
};
