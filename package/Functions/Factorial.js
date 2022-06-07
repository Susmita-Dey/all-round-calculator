/**
 * Find factorial of a number
 * 
 * @param {number} num input to find factorial 
 * @return {number} factorial of given number
 */

const doFactorial = (n) => {
  if (n == 1 || n == 0) {
    return 1;
  }

  let result = n;
  result = doFactorial(n - 1) * n;

  return result;
};

module.exports = doFactorial;