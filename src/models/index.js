'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./user');
const userMessageSchema = require('./userMsg');

const DATABASE_URL =
  process.env.NODE_ENV === 'test'
    ? 'sqlite::memory'
    : process.env.DATABASE_URL || 'postgres://localhost:5432/lab3-api-map';

const sequelize = new Sequelize(DATABASE_URL);
const UserModel = userSchema(sequelize, DataTypes);
const UserMessageModel = userMessageSchema(sequelize, DataTypes);

module.exports = { sequelize, UserModel, UserMessageModel };
