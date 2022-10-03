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

  module.exports = { timeCalc };