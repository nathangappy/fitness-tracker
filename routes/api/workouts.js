const express = require('express');
const router = express.Router();

// GET api/workouts
router.get('/', (req, res) => {
  res.send('Workouts route');
});

module.exports = router;