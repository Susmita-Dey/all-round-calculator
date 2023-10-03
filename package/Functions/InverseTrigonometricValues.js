/**
 * @param {number} numValue The converted value
 * @param {String} stringValue   Choose from sin, cos, or tan
 */
 function getInverseTrigValues(numValue, stringValue) {
    let num = numValue;
    let strValue = stringValue;
    let output = 0;
  
    switch (strValue) {
      case "asin":
        output = Math.asin(num);
        break;
  
      case "acos":
        output = Math.acos(num);
        break;
  
      case "atan":
        output = Math.atan(num);
        break;
  
      default:
        break;
    }
  
    //Returning the inverse trigonometric value of the number
    return output;
  }

  module.exports = { getInverseTrigValues};
