/**
 * Created by lmarkus on 11/28/15.
 */
'use strict';
const password = require('../../lib/util/password');

module.exports = function User(sequelize, DataTypes) {
    let _User;

    _User = sequelize.define('User',
        {
            id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
            role: {type: DataTypes.ENUM, values: ['ADMIN', 'TENANT', 'LANDLORD']},
            login: DataTypes.STRING,
            active: {type: DataTypes.BOOLEAN, defaultValue: true},
            password: {
                type: DataTypes.STRING,
                validate: {
                    len: [10] // Simple min length validation while we're in dev mode.
                }
            }
        },
        {
            classMethods: {
                roles: {
                    ADMIN: 'ADMIN',
                    TENANT: 'TENANT',
                    LANDLORD: 'LANDLORD'
                }
            }
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

    return _User;
};
