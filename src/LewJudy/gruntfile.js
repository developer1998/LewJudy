// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "wwwroot/lib",
					layout: "byComponent",
					cleanTargetDir: false
				}
			}
		},
		//minify files
		uglify: {
			minify_this: {
				options: {
					dead_code: false
				},
				files: [{
					expand: true,
					cwd: 'Scripts/native',
					src: '**/*.js',
					dest: 'wwwroot/lib/native',
					ext: '.min.js'
				}]
			},
			beautify_this: {
				options: {
					preserveComments: 'all',
					beautify: true
				},
				files: [{
				    expand: true,
				    cwd: 'Scripts/native',
				    src: '**/*.js',
				    dest: 'wwwroot/lib/native'
				}]
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: [{
					expand: true,
					cwd: 'CSS/native',
					src: ['*.css', '!*.min.css'],
					dest: 'wwwroot/css/native',
					ext: '.min.css'
				}]
			}
		},
		copy: {
			main: {
				files: [
				  // includes files within path 
				  { expand: true, flatten: true, src: 'CSS/native/*', dest: 'wwwroot/css/native/', filter: 'isFile' }
				],
			},
		},
		lineending: {
		    native: {
		        options: {
                    overwrite: true,
		            eol: 'crlf'
		        },
		        files: [{
		            expand: true,
		            cwd: 'wwwroot/lib/native',
		            src: ['*.js', '!*.min.js'],
		            dest: ''
		        }]
		    }
		}
	});

	// This command registers the default task which will install bower packages into wwwroot/lib
	grunt.registerTask("default", ["bower:install"]);

	// The following line loads the grunt plugins.
	// This line needs to be at the end of this file.
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-lineending');
};