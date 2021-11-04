//routes
const { Router } = require('express');
const router = Router();
const _ = require('underscore');



router.get('/login', (req, res) => {
    const { email, password } = req.body;
    var success = false;

    console.log(req.body);
    console.log(email, password);

    sleep(3000);
    var users = []
    users = require('./users.json');

    _.each(users, (user, index) => {

        if (user.email == email && user.password == password) {
            success = true;
        }

    });

    if (success) {
        res.status(200).json({ 
            "success": "true",
            "mensaje": "credenciales validas" 
     });;
    } else {
        res.status(401).json({ 
            "success": "false",
            "mensaje": "credenciales incorrectas"
        });
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