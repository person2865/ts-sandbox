module.exports = function(grunt) {
    grunt.initConfig({

        connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 8282,
                    hostname: 'localhost',
                    open: true,
                    base: 'app/'
                }
                
            }
        },
        ts: {
            app: {
                src: ['app/scripts/**/*.ts'],
                out: 'app/dist/scripts/app.js',
                options: {
                    target: 'es5',
                    compile: true,
                    comments: true,
                    declaration: true
                }
            }
        },
        watch: {
            files: 'app/**/*.ts',
            tasks: ['ts']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-open');
    
    grunt.registerTask('compile', ['ts']);
    grunt.registerTask('serve', ['ts', 'connect', 'watch']);
};
