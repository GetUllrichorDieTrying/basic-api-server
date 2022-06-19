'use strict';

const { sequelize, UserModel, UserMessageModel } = require('./src/models');
const server = require('./src/server');

// // create associated tables and check connection
sequelize
  .sync()
  .then(() => {
    console.log('USER Success');
    UserModel.create({
      userName: 'Dylan',
      age: 34777,
      email: 'bob@protonmail.ch',
    });
    console.log('USER MODEL Success');
    UserMessageModel.create({
      recipient: 'Tom Hanks',
      sender: 'John Malkovich',
      messageBody: 'What is going on, Tom?',
    });
  })
  .catch((err) => console.error(err));

server.start();
