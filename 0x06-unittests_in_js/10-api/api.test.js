const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url_api = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${url_api}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${url_api}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${url_api}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${url_api}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${url_api}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);

      // Parse the JSON response
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };

      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
  it('POST /login returns correct response for valid userName', (done) => {
    const options = {
      url: `${url_api}/login`,
      json: true,
      body: { userName: 'johndoe' },
    };
    request.post(options, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);

      // Check that the response welcomes the user
      const expectedResponse = `Welcome johndoe`;

      expect(body).to.be.equal(expectedResponse);
      done();
    });
  });

  it('POST /login returns 400 for missing userName', (done) => {
    const options = {
      url: `${url_api}/login`,
      json: true,
      body: {}, // Empty body
    };
    request.post(options, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(400);

      // Check that the response indicates the error
      const expectedResponse = {
        error: 'Username is required',
      };

      expect(body).to.deep.equal(expectedResponse);
      done();
    });
  });
});
