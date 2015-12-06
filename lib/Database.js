/**
 * Created by lmarkus on 11/27/15.
 */
'use strict';
const Sequelize = require('sequelize'),
    Logger = require('./Logger'),
    util = require('util'),
    EventEmitter = require('events');

class Database {
    constructor() {
        EventEmitter.call(this);
    }

    /**
     * Configure from appropriate config/*.json file.
     * @param db
     */
    config(db) {
        this._instance = new Sequelize(db.database, db.username, db.password, db);
        Logger.info(`Connected to DB as ${db.username}`);
        this.emit('ready');
    }

    get instance() {
        if (!this._instance) {
            throw new Error('Instance has not been initialized yet');
        }
        return this._instance;
    }

    set instance(inst) {
        this._instance = inst;
    }
}

util.inherits(Database, EventEmitter);

module.exports = Database;
module.exports.singleton = new Database();
