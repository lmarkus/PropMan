/**
 * Created by lmarkus on 11/28/15.
 * Helper method to initialize some test values to the database.
 */
/* eslint no-console:0 */
'use strict';
const User = require('../models/db/User');

User.sync({force: true}).then(function () {
    User.create({
        login: 'lmarkus',
        password: '123',
        role: User.roles.ADMIN
    }).catch(function (err) {
        console.log('error');
        console.log(err.message);
    });
});
