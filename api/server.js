var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var api = express();

api.set('view engine', 'ejs');
api.set('views', './app/AdminLTE-master');

api.use(bodyParser.urlencoded({extended: true}));
api.use(expressValidator());
consign()
        .then('api/controllers')
        .include('api/routes')
        .then('dao/config.js')
        .then('api/models')

        .into(api);

module.exports = api;