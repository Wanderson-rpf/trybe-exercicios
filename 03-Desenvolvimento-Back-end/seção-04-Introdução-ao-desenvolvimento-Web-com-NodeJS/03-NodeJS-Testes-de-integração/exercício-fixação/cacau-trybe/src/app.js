const { json } = require('express');
const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  try {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/chocolates/total', async (req, res) => {
  try {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ totalChocolates: chocolates.length });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.get('/chocolates/search', async (req, res) => {
  try {
    const { name } = req.query;
    const chocolates = await cacauTrybe.findChocolateByName(name);
    res.status(200).json(chocolates)
  } catch (error) {
    res.status(404).send({ message: error.message });
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
    res.status(404).send({ message: error.message });
  }
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  try {
    const updatedChocolate = await cacauTrybe.updateChocolate(Number(id), { name, brandId });
    res.status(200).json(updatedChocolate);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
  
});

module.exports = app;
