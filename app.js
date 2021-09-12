require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const client = require('./db/Client.js');
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/productsRouter');

const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/prodotti', productsRouter);
app.use(errorHandler);

module.exports = app;
