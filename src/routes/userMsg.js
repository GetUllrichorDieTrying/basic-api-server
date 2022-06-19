'use strict';

const express = require('express');
const { UserMessageModel } = require('../models');

const router = express.Router();

// CREATE / POST
router.post('/userMsg', async (req, res, next) => {
  let userMsg = req.body;
  let response = await UserMessageModel.create(userMsg);
  res.status(200).send(response);
});

// READ / GET ALL
router.get('/userMsg', async (req, res, next) => {
  let allMessages = await UserMessageModel.findAll();
  res.status(200).send(allMessages);
});

// READ / GET ONE
router.get('/userMsg/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneMessage = await UserMessageModel.findOne({ where: { id } });
  res.status(200).send(oneMessage);
});

// UPDATE / PUT
router.put('/userMsg/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedMessage = await UserMessageModel.findOne({ where: { id } });
  res.status(200).send(updatedMessage);
});

// DELETE / DELETE
router.delete('/userMsg/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedMessage = await UserMessageModel.findOne({ where: { id } });
  await UserMessageModel.destroy({ where: { id } });
  res.status(200).send(deletedMessage);
});

module.exports = router;
