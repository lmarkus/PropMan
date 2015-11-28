import Logger from './lib/Logger';
import express from 'express';
import kraken from 'kraken-js';

let options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        Logger.config(config.get('logger'));
        next(null, config);
    }
};

app = express();
app.use(kraken(options));
app.on('start', function () {
    Logger.info('Application ready to serve requests...');
    Logger.info(`Environment: ${app.kraken.get('env:env')}`);
});

export default app;
