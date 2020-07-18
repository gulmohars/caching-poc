const redisClient = require('../startup/redisConnect')();
const redisUtility = {};

redisUtility.addValue = async (paramsObj) => {
  const { rKey, rValue, rTTL } = paramsObj;
  if (await redisClient.get(rKey)) {
    return 'Key already Exists';
  }
  if (typeof rTTL !== 'undefined') {
    return await redisClient.setex(rKey, rTTL, rValue);
  } else {
    return await redisClient.set(rKey, rValue);
  }
  //return await redisClient.setex(rKey, rTTL, rValue);
};

redisUtility.getValue = async (rKey) => {
  if (!(await redisClient.get(rKey))) {
    return 'Key does not Exists';
  }
  return await redisClient.get(rKey);
};

redisUtility.listValues = async () => {
  return await redisClient.keys('*');
};

redisUtility.updateValue = async (paramsObj) => {
  const { rKey, rValue, rTTL } = paramsObj;
  if (!(await redisClient.get(rKey))) {
    return 'Key does not Exists';
  }
  if (typeof rTTL !== 'undefined') {
    return await redisClient.setex(rKey, rTTL, rValue);
  } else {
    return await redisClient.set(rKey, rValue);
  }
  // return await redisClient.setex(rKey, rTTL, rValue);
};

redisUtility.deleteKey = async (rKey) => {
  if (!(await redisClient.get(rKey))) {
    return 'Key does not Exists';
  }
  return await redisClient.del(rKey);
};

module.exports = redisUtility;
