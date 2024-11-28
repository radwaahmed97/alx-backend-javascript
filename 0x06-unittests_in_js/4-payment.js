const Utils = require('./utils');
/**
 * new function named sendPaymentRequestToApi
 * @param {number} totalAmount
 * @param {number} totalShipping
 * @retutn {void}
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
