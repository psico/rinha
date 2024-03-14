const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const pessoaRoute = require('./routes/pessoaRoute');


app.use('/', index);
app.use('/persons', personRoute);
app.use('/pessoa', pessoaRoute)

module.exports = app;
