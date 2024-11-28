const request = require('request');
const { expect } = require('chai');

describe('API integration tests', () => {
    describe('GET /', () => {
        it('Check the code and the body', (done) => {
        const options = {
            url: 'http://localhost:7865',
            headers: {
            'User-Agent': 'request',
            },
        };
        request.get(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
        });
    });
    });
