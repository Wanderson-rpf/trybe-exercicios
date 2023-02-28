// src/app.js
const validateTeam = require('./middleware/validateTeam');
const existingId = require('./middleware/existingId');
const apiCredentials = require('./middleware/apiCredencials');
const teams = require('./data/teams');

const express = require('express');

const app = express();

let nextId = 3;

app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => {
  try {
    res.status(200).json(teams)
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  try {
    res.status(200).json(team);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };

  try {
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };

  try {
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);

  try {
    teams.splice(index, 1);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }

});

module.exports = app;

