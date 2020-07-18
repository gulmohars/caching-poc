const redisClient = require('./redisConnect')();
const cachingUtility = {};

cachingUtility.addValue = async (paramsObj) => {
  const { rKey, rValue, rTTL } = paramsObj;
  if (await redisClient.get(rKey)) {
    return 'Key already Exists';
  }
  if (typeof rTTL !== 'undefined') {
    return await redisClient.setex(rKey, rTTL, rValue);
  } else {
    return await redisClient.set(rKey, rValue);
  }
};

cachingUtility.getValue = async (rKey) => {
  if (!(await redisClient.get(rKey))) {
    return null;
  }
  return await redisClient.get(rKey);
};

cachingUtility.listValues = async () => {
  return await redisClient.keys('*');
};

cachingUtility.updateValue = async (paramsObj) => {
  const { rKey, rValue, rTTL } = paramsObj;
  if (!(await redisClient.get(rKey))) {
    return null;
  }
  if (typeof rTTL !== 'undefined') {
    return await redisClient.setex(rKey, rTTL, rValue);
  } else {
    return await redisClient.set(rKey, rValue);
  }
};

cachingUtility.deleteKey = async (rKey) => {
  if (!(await redisClient.get(rKey))) {
    return null;
  }
  return await redisClient.del(rKey);
};

module.exports = cachingUtility;
