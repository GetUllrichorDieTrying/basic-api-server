'use strict';

const express = require('express');
const { PersonModel } = require('../models');

const router = express.Router();

router.post('/people', async (req, res, next) => {
  let person = req.body;
  let response = await PersonModel.create(person);
  res.status(200).send(response);
});

module.exports = router;
