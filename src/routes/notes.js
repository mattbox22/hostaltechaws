const express = require('express');
const router = express.Router();


router.get('/notes', (req, res) => {
    res.send('NOTAS DESDE DATABASE');
});


module.exports = router;

