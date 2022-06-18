'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const personSchema = require('./person.schema');

const DATABASE_URL =
  process.env.NODE_ENV === 'test'
    ? 'sqlite::memory'
    : process.env.DATABASE_URL || 'postgres://localhost:5432/lab3-api-map';

const sequelize = new Sequelize(DATABASE_URL);
const PersonModel = personSchema(sequelize, DataTypes);

module.exports = { sequelize, PersonModel };
