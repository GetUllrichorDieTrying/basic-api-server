'use strict';

const { sequelize, PersonModel } = require('./src/models');
const server = require('./src/server');

// // create associated tables and check connection
sequelize
  .sync()
  .then(() => {
    console.log('Success');
    PersonModel.create({ name: 'Dylan', age: 34, pronouns: 'he/him' });
  })
  .catch((err) => console.error(err));

server.start();
