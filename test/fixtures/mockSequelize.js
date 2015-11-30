/**
 * Created by lmarkus on 11/28/15.
 */
'use strict';

class MockSequelize {
    constructor() {
        this.hooks = {};
    }

    create(user, options) {
        this.hooks.afterValidate(user, options);
        return Promise.resolve(user);
    }

    afterValidate(handler) {
        this.hooks.afterValidate = handler;
    }

    sync() {
        /* noop */
        return Promise.resolve(true);
    }
}

module.exports = {
    /* eslint no-unused-vars:0 */
    define: function (modelName, schema) {
        return new MockSequelize();
    }
};
