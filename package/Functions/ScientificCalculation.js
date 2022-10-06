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

  module.exports = { getScientificValue};