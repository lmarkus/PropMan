'use strict';
module.exports = function mocha_istanbul(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    // Options
    return {
        coverageUnit: {
            src: 'test/unit/**/*.js',
            options: {
                check: {
                    lines: 100,
                    branches: 100,
                    functions: 100,
                    statements: 100
                }
            }
        }
    };
};
