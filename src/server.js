'user strict';

const express = require('express');
const userRouter = require('./routes/user');
const userMsgRouter = require('./routes/userMsg');
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(userRouter);
app.use(userMsgRouter);
app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('Listening on PORT:', PORT)),
};
