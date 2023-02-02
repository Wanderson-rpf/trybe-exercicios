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

app.get('/chocolates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chocolate = await cacauTrybe.getChocolateById(Number(id));
    res.status(200).json({ chocolate });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  try {
    const { brandId } = req.params;
    const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
