const cachingEngineService = require('../services/cachingEngine');

const cachingEngineController = {};

cachingEngineController.addValue = async (paramsObj) => {
  const response = { status: false, data: {} };
  const result = await cachingEngineService.addValue(paramsObj);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

cachingEngineController.listValues = async () => {
  const response = { status: false, data: {} };
  const result = await cachingEngineService.listValues();
  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

cachingEngineController.getValue = async (rKey) => {
  const response = { status: false, data: {} };
  const result = await cachingEngineService.getValue(rKey);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

cachingEngineController.updateValue = async (paramsObj) => {
  const response = { status: false, data: {} };
  const result = await cachingEngineService.updateValue(paramsObj);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

cachingEngineController.deleteKey = async (rKey) => {
  const response = { status: false, data: {} };
  const result = await cachingEngineService.deleteKey(rKey);

  if (result) {
    response.status = true;
    response.data = result;
  }
  return response;
};

module.exports = cachingEngineController;
