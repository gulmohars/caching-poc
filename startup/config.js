const config = require('config');

module.exports = function () {
  if (!config.get('redisHost')) {
    throw new Error('FATAL ERROR: redisHost is not defined.');
  }
};
