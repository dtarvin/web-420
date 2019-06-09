/*
============================================
; Title:  app.js
; Author: David Tarvin
; Date:   15 May 2019
; Description: part of api-gateway
;===========================================
*/

var express = require('express');
var path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var app = express();

/**
 * 
 Database connection
 */
mongoose.connect('mongodb+srv://admin:admin@cluster0-jwmqn.mongodb.net/test?retryWrites=true', {
  promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  /**
   * var err = new Error('Not Found');
   * err.status = 404;
   * next(err);
  */
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
