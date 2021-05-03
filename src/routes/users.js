const express = require('express');
const router = express.Router();


router.get('/users/signin', (req, res) => {
    res.send('INGRESANDO A LA APP');
});

router.get('/users/signup', (req, res) => {
    res.send('FORMULARIO DE AUTENTICACION');
});

module.exports = router;

