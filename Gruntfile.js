/**
 * ==========================================================================================
 * Definite Elevate CSS: Gruntfile.js
 * ==========================================================================================
 * Version: 0.1.0
 * Author: Definite Development Team
 * Author URL: https://definite.co.id
 * Contact Mail: developer@definite.co.id
 * ==========================================================================================
 */
(function() {
    'use strict';

    // Export Grunt
    module.exports = function(grunt) {

        /* ---------- | Load Grunt Tasks | ---------- */
        require('load-grunt-tasks')(grunt);

        /* ---------- | Configuration Init | ---------- */
        var configs = {
            // Source Directory Structure
            srcs: {
                root:       './srcs/',
                assets:     'assets/',
                scss:       'scss/',
                scripts:    'scripts/',
                html:       'html/',
                test:       'framework-tests/'
            },
            // Target Directory Environment
            target: {
                // Test
                test:           './framework-tests/',
                testAssets:     'assets/',
                testStatic:     'static/',
                testCSS:        'css/',
                testScripts:    'scripts/',
                // Development
                dev:            './dev/',
                devAssets:      'assets/',
                devStatic:      'static/',
                devCSS:         'css/',
                devScripts:     'scripts/',
                // Production (Grunt Default)
                prod:           './dist/',
                prodAssets:     'assets/',
                prodStatic:     'static/',
                prodCSS:        'css/',
                prodScripts:    'scripts/'
            }
        };

        /* ---------- | Grunt Configurations | ----------- */
        var gruntConfigs = {
            pkg: grunt.file.readJSON('package.json'),

            /* ---------- | Task Lists | ---------- */
            // Uglify Task
            uglify: {
                // Development Environment
                dev: {
                    files: {}
                }
            },

            // Webpack Task
            webpack: {
                // Test Environment
                test: {
                    entry: [configs.srcs.root + configs.srcs.scripts + 'script.js'],
                    output: {
                        filename:   'bundle.js',
                        path:       configs.target.test + configs.target.testScripts
                    }
                }
            },

            // SCSS Task
            sass: {
                // Test Environment
                test: {
                    options: {
                        sourcemap:  'none'
                    },
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.scss,
                        src:    ['*.scss'],
                        dest:   configs.target.test + configs.target.testCSS,
                        ext:    '.css'
                    }]
                },
                // Development Environment
                dev: {
                    options: {
                        sourcemap:  'none'
                    },
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.scss,
                        src:    ['*.scss'],
                        dest:   configs.target.dev + configs.target.devCSS,
                        ext:    '.css'
                    }]
                },
                // Production Environment
                prod: {
                    options: {},
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.scss,
                        src:    ['*.scss'],
                        dest:   configs.target.prod + configs.target.prodCSS,
                        ext:    '.min.css'
                    }]
                }
            },

            // Clean Task
            clean: {
                // Test
                test: [
                    configs.target.test + configs.target.testCSS,
                    configs.target.test + configs.target.testScripts
                ],
                // Development
                dev: [
                    configs.target.dev + configs.target.devCSS
                ],
                // Clean All
                all: [
                    // Test Env.
                    configs.target.test,
                    // Development Env.
                    configs.target.dev
                ]
            },

            // Concurrent Task
            concurrent: {
                test: [
                    ['clean:test'],
                    ['sass:test', 'webpack:test'],
                    'notify'
                ]
            },

            // Notify
            notify: {
                clean: {
                    options: {
                        title: "Task Complete",
                        message: "Clean Task Finished."
                    }
                },
                sass: {
                    options: {
                        title: "Task Complete",
                        message: "SASS Task Finished."
                    }
                },
                webpack: {
                    options: {
                        title: "Task Complete",
                        message: "Script Generated."
                    }
                }
            }
        };

        /* ---------- | Grunt Init | ---------- */
        grunt.initConfig(gruntConfigs);

        /* ---------- | Register Tasks | ---------- */
        grunt.registerTask('test', ['concurrent:test']);
        grunt.registerTask('dev', ['concurrent:dev']);
        grunt.registerTask('default', ['concurrent:prod']);
    };
})();