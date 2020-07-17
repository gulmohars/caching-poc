const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const envVar = typeof process.env.SOME_ENDPOINT !== 'undefined' ? process.env.SOME_ENDPOINT : 'undefined';
  res.send('Welcome to home page - env Var set at task definition is ' + envVar);
});
router.get('/health', (req, res) => {
  res.send('I am healthy!!!!!!!!!!!!!!!');
});
module.exports = router;
