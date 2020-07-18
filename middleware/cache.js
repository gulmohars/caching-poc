const cachingUtility = require('../utils/cachingUtility');

//Cache midleware'
async function cache(req, res, next) {
  const { rKey } = req.params;
  const result = await cachingUtility.getValue(rKey);

  if (result !== null) {
    res.send(result);
  } else {
    next();
  }
}

module.exports = cache;
