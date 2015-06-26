module.exports = function(grunt) {
  grunt.config.merge({
    connect: {
      server: {
        options: {
          port: 1337,
          base: 'public',
          keepalive: true
        }
      }
    }
  });
}
