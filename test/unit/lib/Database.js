/**
 * Created by lmarkus on 11/27/15.
 */
/* global describe:false, it:false, beforeEach:false, afterEach:false */
/* eslint no-unused-vars:0 prefer-const:0*/
'use strict';
const assert = require('chai').assert,
    Database = require('../../../lib/Database'),
    Logger = require('../../../lib/Logger');


describe('Database', () => {
    describe('#wrapper', () => {
        it('Throws if used before initialization', ()=> {
            assert.throws(()=> {
                const instance = (new Database()).instance;
            }, 'Instance has not been initialized yet');
        });

        it('Does not throw after initialization', ()=> {
            assert.doesNotThrow(()=> {
                const db = new Database();
                db.config(require('../../../config/development.json').db);
                let instance = db.instance;
            }, 'Instance has been initialized');
        });

        it('Syncs tables', ()=> {

        })
    });
});
