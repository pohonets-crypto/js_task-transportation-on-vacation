/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  // write code here

  let cost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    cost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    cost -= SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
