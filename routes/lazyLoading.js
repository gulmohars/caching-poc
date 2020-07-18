const express = require('express');
const router = express.Router();
const cache = require('../middleware/cache');
const cachingUtility = require('../utils/cachingUtility');

router.get('/:rKey', cache, async (req, res) => {
  const { rKey } = req.params;
  let rValue = 'VALUE IS COMING FROM CACHE -  ' + rKey;

  const paramsObj = { rKey, rValue };
  const result = await cachingUtility.addValue(paramsObj);
  res.send(`Value is NOT yet set in cache - ${rKey}`);
});

module.exports = router;
