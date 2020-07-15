const express = require('express');
const homePage = require('../routes/homePage');
const redis = require('../routes/redis');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/', homePage);
  app.use('/health', homePage);
  app.use('/api/redis', redis);
  app.use(error);
};
