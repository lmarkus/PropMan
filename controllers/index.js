import IndexModel from '../models/index';

module.exports = function MainRouter(router) {
    const model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });
};
