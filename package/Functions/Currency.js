
// Currency Converter
/**
 * Converts a currency
 *
 * @param {String} currencyFrom The currency you are converting from
 * @param {String} currencyTo The currency you are changing to
 * @param {number} value The value you are converting to
 * @return {number} The converted currency
 */
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

module.exports = { getCurrency };