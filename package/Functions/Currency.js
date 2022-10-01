// Currency Converter
/**
 * Converts a currency
 *
 * @param {String} currencyFrom The currency you are converting from
 * @param {String} currencyTo The currency you are changing to
 * @param {number} value The value you are converting to
 * @return {number} The converted currency
 */

const axios = require('axios');

async function getCurrency(currencyFrom, currencyTo, value) {
  return axios.get(`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}`)
   .then((res)=>{
     const rate = res.data.info.rate;  
     return Math.round(rate * value);
  });
}

module.exports = { getCurrency };