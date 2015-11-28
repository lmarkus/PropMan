module.exports = function mocha_istanbul(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    // Options
    return {
        coverageUnit: {
            src: 'test/unit/**/*.js',
            options: {
                mochaOptions: ['--compilers', 'js:babel-core/register'] // any extra options
            }
        }
    };
};
