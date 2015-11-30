/**
 * Created by lmarkus on 11/28/15.
 * Kraken OnConfig Handler.
 */
'use strict';
const Logger = require('./Logger'),
    db = require('./Database').singleton,
    password = require('./util/password');

module.exports = {
    onconfig: function (config, next) {

        Logger.config(config.get('logger'));

        // Set up bcrypt work factor
        password.workFactor = config.get('crypto:workFactor') || 12;

        db.config(config.get('db'));

        require('./init');
        next(null, config);
    }
};
