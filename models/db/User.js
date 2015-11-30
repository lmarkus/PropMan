/**
 * Created by lmarkus on 11/28/15.
 */
'use strict';
const Sequelize = require('sequelize'),
    password = require('../../lib/util/password'),
    db = require('../../lib/Database').singleton.instance;

let _User, roles;

_User = db.define('User', {
    id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true},
    role: {type: Sequelize.ENUM, values: ['ADMIN', 'TENANT', 'LANDLORD']},
    login: Sequelize.STRING,
    active: {type: Sequelize.BOOLEAN, defaultValue: true},
    password: Sequelize.STRING
});

/*
 _User.validate((user, options)=> {
 // TODO: Make sure all values are present.
 // TODO: Password validation
 });
 */
// Hash
_User.afterValidate((user /* , options*/)=> {
    user.password = password.encrypt(user.password);
});

roles = {
    ADMIN: 'ADMIN1',
    TENANT: 'TENANT',
    LANDLORD: 'LANDLORD'
};

class User {
    constructor() {
    }

    /**
     * Sync to DB
     * @returns a Promise
     */
    sync(options) {
        return _User.sync(options);
    }

    create(props) {
        return _User.create(props);
    }

}
module.exports = new User();
module.exports.roles = roles;
