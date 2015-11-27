'use strict';


module.exports = function jshint(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-eslint');

    // Options
    return {
        target: [
            'controllers/**/*.js',
            'lib/**/*.js',
            'models/**/*.js'
        ],
        options: {
            eslintrc: '.eslintrc'
        }
    };
};
