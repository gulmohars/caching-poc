const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to home page');
});
router.get('/health', (req, res) => {
  res.send('I am healthy!!!!!!!!!!!!!!!');
});
module.exports = router;
