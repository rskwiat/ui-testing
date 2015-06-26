module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  require('load-grunt-tasks')(grunt);
  require('./grunt-tasks/connect.js')(grunt);
  require('./grunt-tasks/visual.js')(grunt);

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('test',['bgShell:ui']);

};
