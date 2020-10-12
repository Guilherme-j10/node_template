const express = require('express');
const rotas = express.Router();

const loginScreenController = require('./controller/LoginController');

rotas.get('/', loginScreenController.loginScreen);

module.exports = rotas;