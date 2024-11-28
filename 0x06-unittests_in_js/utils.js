const Utils = {
  calculateNumber(type, a, b) {
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
  },
};

module.exports = Utils;
