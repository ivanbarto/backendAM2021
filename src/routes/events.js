//routes
const { Router } = require('express');
const { delay } = require('underscore');
const router = Router();
const _ = require('underscore');


router.get('/all', (req, res) => {
    sleep(3000);
    const courses = require('./eventsList.json');
    console.log(courses);
    res.json(courses);
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

module.exports = router;