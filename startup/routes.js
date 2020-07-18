const express = require('express');
const homePage = require('../routes/homePage');
const cachingEngine = require('../routes/cachingEngine');
const lazyLoading = require('../routes/lazyLoading');
const writeThrough = require('../routes/writeThrough');
const addingTtl = require('../routes/addingTtl');
const error = require('../middleware/error');
const CONTEXT_BASE_URL = '/api/v1/caching-service';

module.exports = function (app) {
  app.use(express.json());
  app.use(CONTEXT_BASE_URL + '/', homePage);
  app.use(CONTEXT_BASE_URL + '/health', homePage);
  app.use(CONTEXT_BASE_URL + '/cachingEngine', cachingEngine);
  app.use(CONTEXT_BASE_URL + '/lazy-loading', lazyLoading);
  app.use(CONTEXT_BASE_URL + '/write-through', writeThrough);
  app.use(CONTEXT_BASE_URL + '/adding-ttl', addingTtl);
  app.use(error);
};
