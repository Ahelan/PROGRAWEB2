const express = require('express');
const router = express.Router();
const cors = require('cors');
const users = require('./controllers/users');
const multer = require('multer');
const Song = require('./models/songs');


router.use(cors());

router.get("/", (req, res) => { res.send("hola desde repo") })

// Users
router.post('/login', users.login);
router.post('/register', users.createUser);



// Canciones

// Si la ruta no existe, va a entrar aqui
router.get('*', function(req, res){
    res.send({
        error: 'Est ruta no existe'
    })
})

module.exports = router;