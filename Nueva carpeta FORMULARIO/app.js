var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: '12345Bea678910',
    resave: false,
    saveUninitialized: true
}))

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.get('/', function (req, res) {
    var conocido = Boolean (req.session.nombre);

    res.render ('index', {
        title: 'Sesiones en Express.Js',
        conocido: conocido,
        nombre: req.session.nombre
    });
})

module.exports = app;
