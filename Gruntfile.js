module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    grunt.loadNpmTasks('grunt-makara-browserify');


    // Register group tasks
    grunt.registerTask('build', ['lint', 'dustjs', 'makara-browserify', 'sass', 'browserify', 'copyto']);
    grunt.registerTask('test', ['lint', 'mochacli']);
    grunt.registerTask('lint', ['eslint']);

};
