module.exports = (grunt) ->

  grunt.initConfig
    jsSource1: [
      # from template/page/html/head
      'node_modules/jquery/dist/jquery.js'
      'assets/js/scripts.js'
      ]

    jsDest1: 'assets/global.js'


    uglify:
      options:
        report: 'min'
      prod:
        options:
          keepSpecialComments: 0
          sourceMap: false
          compress: true
          mangle: true
        files:
          '<%= jsDest1 %>' : '<%= jsSource1 %>'
      dev:
        options:
          preserveComments: 'all'
          sourceMap: true
          compress: false
          mangle: false
          beautify: true
        files:
          '<%= jsDest1 %>' : '<%= jsSource1 %>'
    less:
      prod:
        files:
          'assets/css/global.css': 'assets/less/style.less'
      dev:
        options:
          map: true
        files:
          'assets/css/global.css': 'assets/less/style.less'

    cssmin:
      target:
        files: [ {
          expand: true
          cwd: 'assets/css'
          dest: 'assets/css'
          src: 'global.css'
          ext: '.min.css'
          } ]


  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', ['uglify:dev', 'less:dev']
  grunt.registerTask 'prod', ['uglify:prod', 'less:prod', 'cssmin']