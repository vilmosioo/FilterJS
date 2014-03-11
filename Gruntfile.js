module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var config = {
		src: 'src',
		dist: '.', // the dist folder is the root folder
		test: 'test'
	};

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({

		pkg: pkg,
		config: config,
		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= config.dist %>'
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
					'<%= config.src %>/**/*.js',
				],
				dest: '<%= config.dist %>/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'<%= config.dist %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			src: {
				src: ['<%= config.src %>/**/*.js'],
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
		// Only performs jshint test, karma watch is handled by the IDE
		watch: {
			js: {
				files: ['<%= config.src %>/**/*.js'],
				tasks: ['concat', 'uglify', 'jshint:src']
			},
			test: {
				files: ['<%= config.test %>/**/*.js'],
				tasks: ['jshint:test']
			}
		},

		// replaces content from src and includes it in the build
		replace: {
			dist:{
				options: {
					patterns: [
						{
							match: 'version',
							replacement: pkg.version, // replaces "@@version" to "*.*.*"
							expression: false   // simple variable lookup
						}
					]
				},
				files: [{
					src: '<%= config.dist %>/<%= pkg.name %>.js',
					dest: '<%= config.dist %>/<%= pkg.name %>.js'
				}]
			}
		}

	});

	grunt.registerTask('test', ['jshint', 'karma']);
	grunt.registerTask('default', ['test', 'concat', 'replace', 'uglify']);

};
