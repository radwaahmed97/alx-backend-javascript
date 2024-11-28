const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const helper = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(helper.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(helper.calculateNumber.callCount).to.be.equal(1);
    helper.calculateNumber.restore();
  });
});
