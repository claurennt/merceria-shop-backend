require('dotenv').config();
const { connectToDBClient } = require('./db/Clients.js');
const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//use this middleware to serve static files when the route is prefixed with /public
app.use('/public/images/', express.static(__dirname + '/public/images'));

app.use('/', indexRouter);
app.use('/prodotti', productsRouter);
app.use('/users', usersRouter);
app.use(errorHandler);

global.clientConnection = connectToDBClient('prodotti');
module.exports = app;
