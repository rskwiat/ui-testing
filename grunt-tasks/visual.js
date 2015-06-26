module.exports = function(grunt) {
  grunt.config.merge({
    bgShell: {
      ui:{
        cmd: 'node tests/visual.js'
      }
    }
  });
}
