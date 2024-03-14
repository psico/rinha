const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("aparareceeeeeeee demais, akiiiiii");
    res.status(200).send({
        title: "Aplicação teste de rinha",
        version: "0.0.2"
    })
});

module.exports = router;