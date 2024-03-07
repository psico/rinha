const express = require('express');
const route = express.Router();
const controller = require('../controllers/pessoaController');

route.post('/pessoas', controller.pessoas);
route.get('/pessoas/:id', controller.pessoasId);
route.get('/pessoas', controller.pessoasBusca);
route.get('/contagem-pessoas', controller.contagemPessoas);

module.exports = route;