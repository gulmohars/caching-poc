const express = require('express');
const router = express.Router();
const cache = require('../middleware/cache');
const redisUtility = require('../utils/redisUtility');

router.get('/:rKey', cache, async (req, res) => {
  const { rKey } = req.params;
  let rValue = 'VALUE IS COMING FROM CACHE -  ' + rKey;

  const paramsObj = { rKey, rValue };
  const result = await redisUtility.addValue(paramsObj);
  res.send(`Value is NOT yet set in cache - ${rKey}`);
});

module.exports = router;
