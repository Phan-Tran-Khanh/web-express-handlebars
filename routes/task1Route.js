const express = require('express');
const router = express.Router();
const { emotions } = require("../data");

router.get('/', (req, res) => {
  let quotePath = '/task1/default.jpg'
  res.render('task1', { emotions, quotePath });
});

router.get('/:emotion', (req, res) => {
  let emotion = req.params.emotion;
  let selectedEmotion = emotions.filter(item => item.title === emotion);
  let quotePath = '/task1/default.jpg';
  if (selectedEmotion) {
    quotePath = selectedEmotion[0].quotePath;
  }
  console.log(emotion, quotePath)
  res.render('task1', { emotions, quotePath });
});

module.exports = router;