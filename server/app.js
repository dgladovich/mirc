require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const webpack = require('webpack');
const config = require('../webpack.config');
const router = require('./routes/index');
const app = express();
const compiler = webpack(config);
const history = require('connect-history-api-fallback');
const ChatServer = require('./chat')(app);


app.use(history());
app.use(require('webpack-dev-middleware')(compiler, { publicPath: config.output.publicPath, historyApiFallback: true }));
app.use(require('webpack-hot-middleware')(compiler));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));
app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
