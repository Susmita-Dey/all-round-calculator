// Adding 2 numbers
function doAdd(num1, num2) {
  return num1 + num2;
}

// Adding n numbers
function doAddN(nums) {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  return sum;
}

// Subtracting 2 numbers
function doSub(num1, num2) {
  return num1 - num2;
}

// Making positive Subtraction
function doPositiveSub(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

// Multiplying 2 numbers
function doMul(num1, num2) {
  return num1 * num2;
}

// Multiplying n numbers
function doMulN(nums) {
  let multiply = 0;
  for (let index = 0; index < nums.length; index++) {
    multiply *= nums[index];
  }
  return multiply;
}

// Dividing 2 numbers
function doDiv(num1, num2) {
  return num1 / num2;
}

// Getting the modulus
function doMod(num1, num2) {
  return num1 % num2;
}

// Calculating the age of a person
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

// Calculate total amount of loan
function calcLoan(amount, rate, month) {
  let interest = (amount * (rate * 0.01)) / month;
  let total_amount = amount / months + interest;
  return total_amount;
}

// Calculate time
function TimeCalculator(seconds) {
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

// Currency Converter
function getCurrency(currencyFrom, currencyTo, value) {
  let c1 = currencyFrom;
  let c2 = currencyTo;
  let finalC = c1 + "-" + c2;
  let result = 0;

  switch (finalC) {
    // Major Currencies
    case "USD-EUR":
      result = value * 0.934642;
      break;

    case "USD-GBP":
      result = value * 0.798108;
      break;

    case "USD-CNY":
      result = value * 6.6706;
      break;

    case "USD-JPY":
      result = value * 129.94317;
      break;

    case "USD-CAD":
      result = value * 1.263022;
      break;

    case "USD-AUD":
      result = value * 1.385431;
      break;

    case "EUR-USD":
      result = value * 1.0699284;
      break;

    case "EUR-GBP":
      result = value * 0.853918;
      break;

    case "EUR-CNY":
      result = value * 7.137064;
      break;

    case "EUR-JPY":
      result = value * 139.02988;
      break;

    case "EUR-CAD":
      result = value * 1.3513431;
      break;

    case "EUR-AUD":
      result = value * 1.4823119;
      break;

    case "GBP-USD":
      result = value * 1.2529633;
      break;

    case "GBP-EUR":
      result = value * 1.1710721;
      break;

    case "GBP-CNY":
      result = value * 8.358017;
      break;

    case "GBP-JPY":
      result = value * 162.81401;
      break;

    case "GBP-CAD":
      result = value * 1.5825202;
      break;

    case "GBP-AUD":
      result = value * 1.7358941;
      break;

    case "CNY-USD":
      result = value * 0.1499116;
      break;

    case "CNY-EUR":
      result = value * 0.1401136;
      break;

    case "CNY-GBP":
      result = value * 0.1196456;
      break;

    case "CNY-JPY":
      result = value * 19.479982;
      break;

    case "CNY-CAD":
      result = value * 0.1893416;
      break;

    case "CNY-AUD":
      result = value * 0.2076921;
      break;

    case "JPY-USD":
      result = value * 0.0076957;
      break;

    case "JPY-EUR":
      result = value * 0.0071927;
      break;

    case "JPY-GBP":
      result = value * 0.006142;
      break;

    case "JPY-CNY":
      result = value * 0.0513348;
      break;

    case "JPY-CAD":
      result = value * 0.0097198;
      break;

    case "JPY-AUD":
      result = value * 0.01066182;
      break;

    case "CAD-USD":
      result = value * 0.791752;
      break;

    case "CAD-EUR":
      result = value * 0.740005;
      break;

    case "CAD-GBP":
      result = value * 0.631903;
      break;

    case "CAD-CNY":
      result = value * 5.28146;
      break;

    case "CAD-JPY":
      result = value * 102.88274;
      break;

    case "CAD-AUD":
      result = value * 1.0969176;
      break;

    case "AUD-USD":
      result = value * 0.721797;
      break;

    case "AUD-EUR":
      result = value * 0.674622;
      break;

    case "AUD-GBP":
      result = value * 0.576072;
      break;

    case "AUD-CNY":
      result = value * 4.814819;
      break;

    case "AUD-JPY":
      result = value * 93.79259;
      break;

    case "AUD-CAD":
      result = value * 0.911646;
      break;

    // All Currencies
    case "AED-USD":
      result = value * 0.2722533;
      break;

    case "USD-AED":
      result = value * 3.67305;
      break;

    case "AED-EUR":
      result = value * 0.2544594;
      break;

    case "EUR-AED":
      result = value * 3.9299;
      break;

    case "AED-GBP":
      result = value * 0.2172875;
      break;

    case "GBP-AED":
      result = value * 4.602197;
      break;

    default:
      break;
  }

  // Returning the final value in rounded form
  return Math.round(result);
}


// Export functions
export default doAdd;
export default doAddN;
export default doSub;
export default doPositiveSub;
export default doMul;
export default doMulN;
export default doDiv;
export default doMod;
export default calcAge;
export default calcLoan;
export default TimeCalculator;
export default getCurrency;

