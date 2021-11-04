//routes
const { Router } = require('express');
const router = Router();
const _ = require('underscore');


router.get('/all', (req, res) => {
    sleep(3000);
    const courses = require('./coursesList.json');
    console.log(courses);
    res.json(courses);
});

router.get('/getByEventId/:id_evento', (req, res) => {
    const { id_evento } = req.params;

    console.log(req.params);
    console.log(id_evento);

    sleep(3000);
    const mCourse = []
    const courses = require('./coursesList.json');

    _.each(courses, (course, index) => {

        if (course.id_evento == id_evento) {
            mCourse.push(course);
        }
    });

    if (mCourse.length != 0) {
        res.json(mCourse);
    } else {
        res.status(400).json({ "mensaje": "este evento no tiene cursos" });
    }
});


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

module.exports = router;