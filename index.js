var express = require('express');
var Sequelize = require('sequelize');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config');
var dbcontext = require('./context/db')(Sequelize, config);


app.use(express.static('public'));
app.use(cookieParser(config.cookie.key));
app.use(bodyParser.json());

dbcontext.sequelize
    .sync()
    .then(() => {
        app.listen(3000, () => console.log('Running'));
    })
    .catch((err) => console.log(err));