module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'dist'
					]
				}]
			}
		},

		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: [
					'src/**/*.js',
				],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			dist: {
				src: ['src/**/*.js'],
				options: {
					jshintrc: '.jshintrc'
				}
			},
			test: {
				src: ['test/**/*.js'],
				options: {
					jshintrc: 'test/.jshintrc'
				}
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['default']
			}
		}

	});

	grunt.registerTask('test', ['jshint', 'karma']);
	grunt.registerTask('default', ['test', 'concat', 'uglify']);

};
