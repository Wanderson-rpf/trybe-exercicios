const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  try {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
