'use strict';
const Logger = require('./lib/Logger'),
    db = require('./lib/Database').singleton,
    express = require('express'),
    kraken = require('kraken-js');

let options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {

        Logger.config(config.get('logger'));
        db.config(config.get('db'));

        next(null, config);
    }
};

app = express();
app.use(kraken(options));
app.on('start', function () {
    Logger.info('Application ready to serve requests...');
    Logger.info(`Environment: ${app.kraken.get('env:env')}`);
});

module.exports = app;
