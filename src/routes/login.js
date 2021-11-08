//routes
const { Router } = require('express');
const router = Router();
const _ = require('underscore');



router.post('/login', (req, res) => {
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
            "success": true,
            "mensaje": "credenciales validas"
        });;
    } else {
        res.status(401).json({
            "success": false,
            "mensaje": "credenciales incorrectas"
        });
    }
});

router.post('/register', (req, res) => {
    const { email, password, nombre, apellido, telefono } = req.body;
    var success = false;

    console.log(req.body);
    console.log(email, password, nombre, apellido, telefono);

    sleep(3000);

    if (email && password && nombre && apellido && telefono) {
        var users = []
        users = require('./users.json');
        const id = users.length + 1;
        const newUser = { ...req.body, id };
        users.push(newUser);
        console.log(users);
        success = true
    }

    if (success) {
        res.status(200).json({
            "success": "true",
            "mensaje": "usuario creado"
        });;
    } else {
        res.status(400).json({
            "success": "false",
            "mensaje": "no se enviaron los campos correctos"
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