/**
 * Created by lmarkus on 11/27/15.
 * Artificial entry point for using Babel's require hook.
 */
/* eslint no-console:0 strict:0*/ // <== Disable no-strict check, as babel hasn't loaded yet.
'use strict';
require('babel-register'); // <== Entry point runs through Babel for ES6 goodness.
require('./server');
