'use strict';

const express = require('express');
const { UserModel } = require('../models');

const router = express.Router();

// CREATE / POST
router.post('/user', async (req, res, next) => {
  let user = req.body;
  let response = await UserModel.create(user);
  res.status(200).send(response);
});

// READ / GET ALL
router.get('/user', async (req, res, next) => {
  let allUsers = await UserModel.findAll();
  res.status(200).send(allUsers);
});

// READ / GET ONE
router.get('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneUser = await UserModel.findOne({ where: { id } });
  res.status(200).send(oneUser);
});

// UPDATE / PUT
router.put('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedUser = await UserModel.findOne({ where: { id } });
  res.status(200).send(updatedUser);
});

// DELETE / DELETE
router.delete('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedUser = await UserModel.findOne({ where: { id } });
  await UserModel.destroy({ where: { id } });
  res.status(200).send(deletedUser);
});

module.exports = router;
