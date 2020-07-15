const redisUtility = require('../utils/redisUtility');

const redisController = {};

redisController.addValue = async (paramsObj) => {
  const response = { status: false, data: {} };
  const result = await redisUtility.addValue(paramsObj);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

redisController.listValues = async () => {
  const response = { status: false, data: {} };
  const result = await redisUtility.listValues();
  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

redisController.getValue = async (rKey) => {
  const response = { status: false, data: {} };
  const result = await redisUtility.getValue(rKey);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

redisController.updateValue = async (paramsObj) => {
  const response = { status: false, data: {} };
  const result = await redisUtility.updateValue(paramsObj);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

redisController.deleteKey = async (rKey) => {
  const response = { status: false, data: {} };
  const result = await redisUtility.deleteKey(rKey);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

module.exports = redisController;
