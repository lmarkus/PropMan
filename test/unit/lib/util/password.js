/**
 * Created by lmarkus on 11/29/15.
 */
/* global describe:false, it:false, before:false, after:false, beforeEach:false, afterEach:false */
/* eslint no-unused-vars:0 prefer-const:0 */
'use strict';
const assert = require('chai').assert,
    password = require('../../../../lib/util/password');

describe('Password Utility', ()=> {
    describe('Password Validation', ()=> {
        it('Rejects an undefined password', ()=> {
            assert.notOk(password.validate());
        });
        it('Rejects an empty password', ()=> {
            assert.notOk(password.validate(''));
        });
        it('Accepts any other password ', ()=> {
            assert.ok(password.validate('foo'));
        });
    });

    describe('Encryption', () => {
        it('Encrypts a password', () => {
            const SECRET = 'foo',
                HASH = password.encrypt(SECRET);

            assert.notStrictEqual(SECRET, HASH);
            assert.ok(password.compare(SECRET, HASH));

        });
    });
});
