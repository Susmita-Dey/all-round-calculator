/**
 * Function to find largest element of an array
 *
 * @param {Array} num input an array to find the max value
 * @return {number} max value of an array
 *
 */

function doMax(num) {
  const n = Math.max(...num);
  return n;
}

/**
 * Function to find smallest element of an array
 *
 * @param {Array} num input an array to find the manimum value
 * @return {number} minimum value of an array
 *
 */

function doMin(num) {
  const n = Math.min(...num);
  return n;
}

module.exports = { doMax, doMin };