/**
 * Created by lmarkus on 11/27/15.
 */
'use strict';
const models = {},
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    modelsPath = path.resolve(path.join(__dirname, '../models/db')),
    Logger = require('./Logger'),
    Sequelize = require('sequelize'),
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
        const sequelize = this._instance = new Sequelize(db.database, db.username, db.password, db);
        Logger.info(`Connected to DB as ${db.username}`);

        // Load all models.
        fs
            .readdirSync(modelsPath)
            .filter(function (file) {
                return (file.indexOf('.') !== 0) && (file !== modelsPath) && (file.slice(-3) === '.js');
            })
            .forEach(function (file) {
                const model = sequelize.import(path.join(modelsPath, file));
                models[model.name] = model;
            });
        /*
         Associations are not being use at the moment, but here's where they should be initialized.

         Object.keys(models).forEach(function (modelName) {

         if (models[modelName].associate) {
         models[modelName].associate(models);
         }

         });
         */

        models.sequelize = this._instance;
        models.Sequelize = Sequelize;
        this._models = models;
        this.emit('ready');
    }

    get instance() {
        if (!this._instance) {
            throw new Error('Instance has not been initialized yet');
        }
        return this._instance;
    }

    get models() {
        return this._models;
    }

    set instance(inst) {
        this._instance = inst;
    }
}

util.inherits(Database, EventEmitter);

module.exports = new Database();
