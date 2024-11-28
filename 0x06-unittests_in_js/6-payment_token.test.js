const chai = require('chai');

const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({data: 'Successful response from the API'});
      done();
    }
    );
    });
});
