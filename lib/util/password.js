/**
 * Created by lmarkus on 11/28/15.
 */
'use strict';
const _ = require('lodash'),
    bcrypt = require('bcrypt'),
    debug = require('util').debuglog('CRYPTO');

module.exports.workFactor = 12;

module.exports.validate = (pw) => {
    return !_.isEmpty(pw);
};

module.exports.compare = bcrypt.compareSync;

module.exports.encrypt = (pw) => {
    debug(`Encrypting with workFactor of ${module.exports.workFactor}`);
    return bcrypt.hashSync(pw, module.exports.workFactor);
};
