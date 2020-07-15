// const createError = require('http-errors');
const express = require('express');
const winston = require('winston');

const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

module.exports = server;
