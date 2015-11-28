'use strict';
module.exports = function mocha_istanbul(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    // Options
    return {
        coverageUnit: {
            src: 'test/unit/**/*.js',
            options: {
            }
        }
    };
};
