const redisUtility = require('../utils/redisUtility');

//Cache midleware'
async function cache(req, res, next) {
  const { rKey } = req.params;
  const result = await redisUtility.getValue(rKey);

  if (result !== 'Key does not Exists') {
    res.send(result);
  } else {
    next();
  }
}

module.exports = cache;
