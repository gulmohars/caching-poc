const config = require('config');
const redis = require('async-redis');

module.exports = () => {
  const redisHost = config.get('redisHost');
  const redisPort = config.get('redisPort');
  try {
    // return redis.createClient(redisPort, redisHost);

    console.log(`

    redisPort: ${JSON.stringify(redisPort)}
    redisHost: ${JSON.stringify(redisHost)}
    
    process.env: ${JSON.stringify(process.env)}

    `);

    // const redisClient = redis.createClient({ host: redisHost, port: redisPort });
    // const redisClient = redis.createClient({ host: 'redis-server', port: 6379 });

    const redisClient = redis.createClient(redisPort, redisHost, {
      retry_strategy: function (options) {
        if (options.error && options.error.code === 'ECONNREFUSED') {
          // End reconnecting on a specific error and flush all commands with
          // a individual error
          return new Error('The server refused the connection');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          // End reconnecting after a specific timeout and flush all commands
          // with a individual error
          return new Error('Retry time exhausted');
        }
        if (options.attempt > 10) {
          // End reconnecting with built in error
          return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
      },
    });

    console.log(`Successfully connected to Redis Cache...`);
    return redisClient;
  } catch (error) {
    console.log(`Unable to connect to Redis Cache...`);
    // throw new Error(error);
  }
};
