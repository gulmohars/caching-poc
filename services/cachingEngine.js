const cachingUtility = require('../utils/cachingUtility');
const cachingEngineService = {};

cachingEngineService.addValue = async (paramsObj) => {
  const { rKey } = paramsObj;

  const isKeyExists = await cachingUtility.getValue(rKey);
  if (isKeyExists !== null) return 'Key already Exists';

  return await cachingUtility.addValue(paramsObj);
};

cachingEngineService.getValue = async (rKey) => {
  const isKeyExists = await cachingUtility.getValue(rKey);
  if (isKeyExists === null) return 'Key does not Exists';

  return await cachingUtility.getValue(rKey);
};

cachingEngineService.listValues = async () => {
  return await cachingUtility.listValues('*');
};

cachingEngineService.updateValue = async (paramsObj) => {
  const { rKey } = paramsObj;

  const isKeyExists = await cachingUtility.getValue(rKey);
  if (isKeyExists === null) return 'Key does not Exists';

  return await cachingUtility.updateValue(paramsObj);
};

cachingEngineService.deleteKey = async (rKey) => {
  const isKeyExists = await cachingUtility.getValue(rKey);
  if (isKeyExists === null) return 'Key does not Exists';

  return await cachingUtility.deleteKey(rKey);
};

module.exports = cachingEngineService;
