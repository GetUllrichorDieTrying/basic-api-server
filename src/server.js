'user strict';

const express = require('express');
const peopleRouter = require('./routes/clothes');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(peopleRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('Listening on PORT:', PORT)),
};
