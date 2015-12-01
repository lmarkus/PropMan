'use strict';
const registerUser = require('../controllers/registration').registerUser,
    IndexModel = require('../models/index');

module.exports = function MainRouter(router) {
    const model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });


    // Registration API
    // ------------------

    router.get('/registration', function (req, res) {
        res.render('registration', {});
    });

    router.post('/registration', registerUser);
};
