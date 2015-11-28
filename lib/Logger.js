/**
 * Created by lmarkus on 11/27/15.
 */
'use strict';
const winston = require('winston');

class Logger {
    constructor() {
        winston.clear();
    }

    config(options) {
        const transports = options && options.transports || [];
        transports.forEach(transport => {
            winston.add(winston.transports[transport.name], transport.conf);
        });
    }

    info(message) {
        winston.log('info', message);
    }
}

module.exports = new Logger();
