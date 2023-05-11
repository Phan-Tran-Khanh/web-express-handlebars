const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const salary = req.query.salary || 0;
  const data = {
    necessity: salary * 0.55,
    financialFreedom: salary * 0.1,
    give: salary * 0.05,
    education: salary * 0.1,
    longTermSaving: salary * 0.1,
    play: salary * 0.1
  }
  res.render('task2', { ...data });
});

module.exports = router;