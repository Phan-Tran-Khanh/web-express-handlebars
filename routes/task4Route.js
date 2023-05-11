const express = require('express');
const router = express.Router();
const { zodiacs } = require('../data');

router.get('/', (req, res) => {
  res.render('task4', { zodiacs });
});

router.get('/details/:zodiac', (req, res) => {
  let zodiac = req.params.zodiac;
  let selectedZodiac = zodiacs.filter(item => item.name === zodiac)[0];
  res.render('task4-details', { ...selectedZodiac });
});

module.exports = router;