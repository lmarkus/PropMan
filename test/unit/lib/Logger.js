/**
 * Created by lmarkus on 11/28/15.
 */
/* global describe:false, it:false, beforeEach:false, afterEach:false */
/* eslint no-unused-vars:0 prefer-const:0*/
import sinon from 'sinon';
import {assert} from 'chai';
import winston from 'winston';
import Logger from '../../../lib/Logger';

describe('Logger', ()=> {
    let sandbox = sinon.sandbox.create();
    afterEach(()=> {
        sandbox.restore();
    });

    it('Starts with no transports', ()=> {
        assert.strictEqual(Object.keys(winston.default.transports).length, 0);
    });

    it('No config means no Transports', ()=> {
        Logger.config();
        assert.strictEqual(Object.keys(winston.default.transports).length, 0);
    });

    it('Adds console via config', ()=> {
        Logger.config({
            transports: [
                {
                    name: 'Console',
                    conf: {}
                }
            ]
        });
        assert.strictEqual(Object.keys(winston.default.transports).length, 1);
    });

    it('Logs info message', ()=> {
        sandbox.stub(winston, 'log', (level, msg)=> {
            assert.strictEqual(level, 'info', 'Info Message');
            assert.strictEqual(msg, 'foo', 'Message to log');
        });
        Logger.info('foo');
    });
});
