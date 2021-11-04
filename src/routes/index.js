//routes
const {Router} = require('express');
const router = Router();

router.get('/api/test', (req, res)=>{
    const data = {
        "title" : "Probando",
        "description" : "Estoy probando mi API REST"
    };
    res.json(data);
});

module.exports = router;