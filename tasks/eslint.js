'use strict';

module.exports = function jshint(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-eslint');

    // Options
    return {
        target: [
            'controllers/**/*.js',
            'lib/**/*.js',
            'models/**/*.js',
            'index.js',
            'server.js'
        ],
        options: {
            eslintrc: '.eslintrc'
        }
    };
};
