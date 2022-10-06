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

  module.exports = { calcAge };