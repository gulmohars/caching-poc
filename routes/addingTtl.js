const express = require('express');
const router = express.Router();
const cachingEngineController = require('../controllers/cachingEngine');

/*
input: {
  "rKey":"rKeyTest1", 
  "rValue":"rValueTest1", 
  "rTTL":3600
}
*/
router.post('/', async (req, res) => {
  let { rKey, rValue, rTTL } = req.body;

  if (typeof rValue === 'number') {
    rValue = rValue * 10;
  }
  const paramsObj = { rKey, rValue, rTTL };
  const result = await cachingEngineController.addValue(paramsObj);
  res.send(result);
});
router.get('/', async (req, res) => {
  const result = await cachingEngineController.listValues();
  res.send(result);
});
router.get('/:rKey', async (req, res) => {
  const { rKey } = req.params;
  const result = await cachingEngineController.getValue(rKey);
  res.send(result);
});
router.patch('/', async (req, res) => {
  const { rKey, rValue, rTTL } = req.body;
  const paramsObj = { rKey, rValue, rTTL };
  const result = await cachingEngineController.updateValue(paramsObj);
  res.send(result);
});
router.delete('/:rKey', async (req, res) => {
  const { rKey } = req.params;
  const result = await cachingEngineController.deleteKey(rKey);
  res.send(result);
});

module.exports = router;
