const express = require('express');

const app = express();
const port = 7865;

// Middleware to parse JSON body
app.use(express.json());

// Start server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with numeric ID validation
app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

// Available payments route
app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Login route
app.post('/login', (req, res) => {
  const username = (req.body && req.body.userName) || '';

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  return res.send(`Welcome ${username}`);
});

// Export the app for testing or further development
module.exports = app;
