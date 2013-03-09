/*jshint debug:true, node:true */

// TODO:
// -

module.exports = function(grunt) {
   //var _ = grunt.util._;

   // -- LOAD GRUNT PLUGINS -- //
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-crx');

   // --- HELPERS --- //
   var glg = grunt.log.write;
   glg('Starting');
   debugger;

   // --- CREATE CONFIGURATION --- //
   var config = {
      pkg: grunt.file.readJSON('package.json'),
      manifest: grunt.file.readJSON('extension/manifest.json')
   };

   config.crx = {
      pt_extension: {
         src: 'extension/',
         dest: 'build',
         privateKey: 'pt_tweaks.pem',
         filename: '<%= pkg.name %>-<%= manifest.version %>.crx',
         baseURL: 'http://not.here.com'
      }
   };


   /** JSHINT: Linting for all the files */
   config.jshint = {
      options: {
         jshintrc: 'jshintrc'
      },
      build : ['Gruntfile.js'],
      app   : ['extension/src/*.js', 'extension/*.js', '!**/rearrange_panels.js']
   };
   /** WATCH:
   *  provide a fast development watch and a slower full everything watch.
   */
   config.watch = {
      full : {
         files : ['Gruntfile.js', 'extension/*.json',
                  'extension/src/*.js',
                  'extension/*.js'],
         tasks : ['build']
      }
   };

   // -- REGISTER AND SETUP TASK ALIASES -- //
   grunt.initConfig(config);

   grunt.registerTask('build',   ['jshint', 'crx']);
   grunt.registerTask('dev',     ['build', 'watch:full']);
   grunt.registerTask('default', ['dev']);
};
