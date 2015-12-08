/**
 * Created by lmarkus on 11/28/15.
 * Helper method to initialize some test values to the database.
 */
/* eslint no-console:0 */
'use strict';

const db = require('./Database'),
    User = db.models.User;

User.sync({force: true}).then(function () {
    User.create({
        login: 'lmarkus',
        password: '1234567890',
        role: User.roles.ADMIN
    }).catch(function (err) {
        console.log('error');
        console.log(err.message);
    });
});
