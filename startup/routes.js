const express = require('express');
const homePage = require('../routes/homePage');
const redis = require('../routes/redis');
const error = require('../middleware/error');
const CONTEXT_BASE = '/api/v1/redis-service';

module.exports = function (app) {
  app.use(express.json());
  app.use(CONTEXT_BASE + '/', homePage);
  app.use(CONTEXT_BASE + '/health', homePage);
  app.use(CONTEXT_BASE + '/redis', redis);
  app.use(error);
};
