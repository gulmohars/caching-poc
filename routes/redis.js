const express = require('express');
const router = express.Router();
const redisController = require('../controllers/redis');

/*
input: {
  "rKey":"rKeyTest1", 
  "rValue":"rValueTest1", 
  "rTTL":3600
}
*/
router.post('/', async (req, res) => {
  const { rKey, rValue, rTTL } = req.body;
  const paramsObj = { rKey, rValue, rTTL };
  const result = await redisController.addValue(paramsObj);
  res.send(result);
});
router.get('/', async (req, res) => {
  const result = await redisController.listValues();
  res.send(result);
});
router.get('/:rKey', async (req, res) => {
  const { rKey } = req.params;
  const result = await redisController.getValue(rKey);
  res.send(result);
});
router.patch('/', async (req, res) => {
  const { rKey, rValue, rTTL } = req.body;
  const paramsObj = { rKey, rValue, rTTL };
  const result = await redisController.updateValue(paramsObj);
  res.send(result);
});
router.delete('/:rKey', async (req, res) => {
  const { rKey } = req.params;
  const result = await redisController.deleteKey(rKey);
  res.send(result);
});

module.exports = router;
