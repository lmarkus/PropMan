/**
 * Created by lmarkus on 11/27/15.
 */
import winston from 'winston';

class Logger {
    constructor() {
        winston.clear();
    }

    config(options = {transports: []}) {
        options.transports.forEach(transport => {
            winston.add(winston.transports[transport.name], transport.conf);
        });
    }

    info(message) {
        winston.log('info', message);
    }
}

export default new Logger();
