const { getCurrency } = require("./Functions/Currency");
const doFactorial = require("./Functions/Factorial");
const { doMax, doMin } = require("./Functions/Max.Min.Array");

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

// convert number ot decimal

function toDec(num) {
  return num.toString(10);
}

// convert number to binary

function toBin(num) {
  return num.toString(2);
}

// convert number to hex

function toHex(num) {
  return num.toString(16);
}

// convert number to octal

function toOct(num) {
  return num.toString(8);
}

// convert number to trinary

function toTri(num) {
  return num.toString(3);
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

/**
 * Calculating the age
 *
 * @param {String} dateString The date of birth should be in this format 'MM-DD-YY'
 * @return The age of the person
 */
function calcAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/**
 * Calculating the total amount of loan
 *
 * @param {number} amount The amount
 * @param {number} rate The rate
 * @param {number} month The number of months
 * @return {number} Total amount of loan
 */
function calcLoan(amount, rate, month) {
  let interest = (amount * (rate * 0.01)) / month;
  let total_amount = amount / month + interest;
  return "Total Amount: " + total_amount;
}

/**
 * Calculating time
 *
 * @param {number} seconds The number of seconds
 * @return {Data<number,number,number,number,number,number>} Object having year,month,day,hour,minute and second as properties
 *
 */
function timeCalc(seconds) {
  let year = Math.floor(seconds / (3600 * 24 * 30 * 12));
  let value = seconds % (3600 * 24 * 30 * 12);

  let month = Math.floor(value / (3600 * 24 * 30));
  value %= 3600 * 24 * 30;

  let day = Math.floor(value / 86400);
  value %= 86400;

  let hour = Math.floor(value / 3600);
  value %= 3600;

  let min = Math.floor(value / 60);
  value %= 60;

  let sec = value;

  const Obj = {};
  //User can not modify the value of the properties
  return Object.defineProperties(Obj, {
    year: {
      value: year,
      writable: false,
      enumerable: true,
    },
    month: {
      value: month,
      writable: false,
      enumerable: true,
    },
    day: {
      value: day,
      writable: false,
      enumerable: true,
    },
    hour: {
      value: hour,
      writable: false,
      enumerable: true,
    },
    minute: {
      value: min,
      writable: false,
      enumerable: true,
    },
    second: {
      value: sec,
      writable: false,
      enumerable: true,
    },
  });
}
//Scientific Calculator

/**
 * @param {number} numValue The converted value
 * @param {String} stringValue   Choose from sin, cos, or tan
 */
function getScientificValue(numValue, stringValue) {
  let num = numValue;
  let strValue = stringValue;
  let output = 0;

  switch (strValue) {
    case "sin":
      output = Math.sin(num);
      break;

    case "cos":
      output = Math.cos(num);
      break;

    case "tan":
      output = Math.tan(num);
      break;

    default:
      break;
  }

  //Returning the scientific value of the number
  return output;
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
};
