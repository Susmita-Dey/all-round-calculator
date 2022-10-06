/**
 * Calculating the total amount of loan
 *
 * @param {number} amount The amount
 * @param {number} rate The rate
 * @param {number} month The number of months
 * @return {number} Total amount of loan
 */
 function calcLoan(amount, rate, month) {
    let interest = (amount * (rate * 0.01)) / month;
    let total_amount = amount / month + interest;
    return "Total Amount: " + total_amount;
  }

  module.exports = { calcLoan };