const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const helper = sinon.spy(console);
    const fixed = sinon.stub(Utils, 'calculateNumber');

    fixed.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(fixed.calledWith('SUM', 100, 20)).to.be.true;
    expect(fixed.callCount).to.be.equal(1);
    expect(helper.log.calledWith('The total is: 10')).to.be.true;
    expect(helper.log.callCount).to.be.equal(1);
    fixed.restore();
    helper.log.restore();
  });
});
