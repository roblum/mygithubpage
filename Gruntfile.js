module.exports = function (grunt) {
    grunt.initConfig({
      uglify: {
            dist: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
                ,options: {
                    banner: '/* robertlum.me - <%= grunt.template.today() %> */'
                }
            },
        },
        watch: {
            // index : {
            //   files: ['index.html']
            //   ,tasks: ['']
            // },
            less : {
              files: ['css/*.less']
              ,tasks: ['less']
            },
        }

  //   ,aws: grunt.file.readJSON('../../s3.json')
  //   ,s3: {
  //     options: {
  //     key: '<%= aws.key %>'
  //     ,secret: '<%= aws.secret %>'
  //     ,bucket: '<%= aws.bucket %>'
  //     ,access: 'public-read'
  //     ,headers: {
  //       // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
  //       "Cache-Control": "max-age=630720000, public"
  //       ,"Expires": new Date(Date.now() + 63072000000).toUTCString()
  //     }
  //   },
  //   dev: {
  //     upload: [
  //       {
  //         src: ''
  //         ,dest: ''
  //       },{
  //         src: ''
  //         ,dest: ''
  //       }
  //     ]
  //   },
  // },
  // LESS
  less: {
      dist: {
          files: {
            'css/styles.css': ['css/main.less']
          }
      },
    },
  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-s3');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);


};