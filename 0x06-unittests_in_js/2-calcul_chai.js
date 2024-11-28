/**
 * function named calculateNumber function
 * @param {String} type - SUM, SUBTRACT, DIVIDE
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} sum of a and b
 */
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    const result = Math.round(a) + Math.round(b);
    return result;
  }

  if (type === 'SUBTRACT') {
    const result = Math.round(a) - Math.round(b);
    return result;
  }

  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    const result = Math.round(a) / Math.round(b);
    return result;
  }
  return 0;
}

module.exports = calculateNumber;
