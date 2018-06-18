const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const webpack = require('webpack');
const config = require('../webpack.config');
const router = require('./routes/index');
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { publicPath: config.output.publicPath }));
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


const socketServer =require('socket.io')
const serve = http.createServer(app);
const io = socketServer(serve);
serve.listen(3000,()=> {console.log("+++Gethyl Express Server with Socket Running!!!")})

io.on('connection', (client) => {
    console.log('Client connected')
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});
module.exports = app;
