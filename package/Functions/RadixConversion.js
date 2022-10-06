
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

  module.exports = { toDec, toBin, toHex, toOct, toTri };