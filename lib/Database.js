/**
 * Created by lmarkus on 11/27/15.
 */
import Sequelize from 'sequelize';
import Logger from './Logger';

class Database {
    constructor() {
    }

    /**
     * Configure from appropriate config/*.json file.
     * @param db
     */
    config(db) {
        this._instance = new Sequelize(db.database, db.username, db.password, db.options);
        Logger.info(`Connected to DB as ${db.username}`);
    }

    get instance() {
        if (!this._instance) {
            throw new Error('Instance has not been initialized yet');
        }
        return this._instance;
    }
}

const singleton = new Database();

export default Database;
export {singleton};
