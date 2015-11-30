/**
 * Created by lmarkus on 11/28/15.
 */
/* global describe:false, it:false, before:false, after:false, beforeEach:false, afterEach:false */
/* eslint no-unused-vars:0 prefer-const:0 */
'use strict';
const sinon = require('sinon'),
    assert = require('chai').assert,
    db = require('../../../../lib/Database'),
    password = require('../../../../lib/util/password');

describe('User Model', ()=> {
    let User, originalSingleton;

    /**
     * Setup:
     * Mock Database connector.
     **/
    before(()=> {
        originalSingleton = db.singleton;
        db.singleton.instance = require('../../../fixtures/mockSequelize');
        User = require('../../../../models/db/User');

    });

    /**
     * Teardown:
     * Restore everything.
     **/
    after(()=> {
        db.singleton = originalSingleton;
    });


    it('Creates a user with a hashed password', (done)=> {
        // Create a user
        const SECRET = 'KlaatuBaradaNikto';
        User.sync().then(() => {
            User.create({password: SECRET})
                .then(
                    function (user) {
                        // Verify the password has been hashed and salted
                        assert.notStrictEqual(SECRET, user.password);

                        // Verify that the plaintext can be compared to the hash.
                        assert.ok(password.compare(SECRET, user.password));
                        assert.notOk(password.compare('THESE_ARE_NOT_THE_DROIDS', user.password));
                        done();
                    }
                )
                .catch(function (err) {
                    done(err);
                });
        });
    });
});
