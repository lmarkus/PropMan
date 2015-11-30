'use strict';
const
    express = require('express'),
    kraken = require('kraken-js'),
    Logger = require('./lib/Logger'),
    initOptions = require('./lib/initOptions');

let app;

app = express();
app.use(kraken(initOptions));
app.on('start', function () {
    Logger.info('Application ready to serve requests...');
    Logger.info(`Environment: ${app.kraken.get('env:env')}`);
});

module.exports = app;
