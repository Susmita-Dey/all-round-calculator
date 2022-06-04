  const {getCurrency}=require('./Functions/Currency')
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
 * Returns the sum of the numbers in an array
 *
 * @param {array} nums An array of numbers
 * @return {number} sum of all the numbers in an array
 */
function doAddN(nums) {
  const numbers = nums.reduce(
    (totalVal, currentVal) => totalVal + currentVal,
    0
  );
  return numbers;
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
 * Multiplication of all numbers in the array
 *
 * @param {array} Array of numbers
 * @return {number} Multiplication of all the numbers
 */
function doMulN(nums) {
  let multiply = 1;
  for (let index = 0; index < nums.length; index++) {
    multiply *= nums[index];
  }
  return multiply;
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

function doReverse(num) {
  num *= -1;
  return num;
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
 * @return {String} The date
 */
function timeCalc(seconds) {
  let y = Math.floor(seconds / 31536000);
  let mo = Math.floor((seconds % 31536000) / 2628000);
  let d = Math.floor(((seconds % 31536000) % 2628000) / 86400);
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  let yDisplay = y > 0 ? y + (y === 1 ? " year, " : " years, ") : "";
  let moDisplay = mo > 0 ? mo + (mo === 1 ? " month, " : " months, ") : "";
  let dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
  let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  let mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes, ") : "";
  let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds ") : "";
  return yDisplay + moDisplay + dDisplay + hDisplay + mDisplay + sDisplay;
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
};
