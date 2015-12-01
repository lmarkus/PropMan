/**
 * Created by lmarkus on 11/30/15.
 */
'use strict';
const User = require('../models/db/User');
module.exports.registerUser = function registerUSer(req, res) {

    User.create(req.body).then(() => {
        res.redirect('/home');
    }).catch(() => {
        res.statusCode(400);
        res.json({
            status: false
        });
    });

};
