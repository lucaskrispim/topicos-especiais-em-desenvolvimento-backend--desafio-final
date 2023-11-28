const express = require('express');

const app = express();

const { check, validationResult } = require('express-validator');

app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send('Bootcamp desenvolvedor back end - Desafio final!');
});

module.exports = app;
