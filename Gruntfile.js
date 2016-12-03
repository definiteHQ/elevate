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

        /* ---------- | Variable Init | ---------- */
        var noserve = grunt.option('noserve') || false;

        /* ---------- | Configuration Init | ---------- */
        var configs = {
            // File Name Output
            files: {
                script:     'bundle'
            },

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
                // Test (This Environment is for Contributor Only)
                test:           './framework-tests/',
                testAssets:     'assets/',
                testStatic:     'static/',
                testCSS:        'css/',
                testScripts:    'scripts/',
                // Development
                dev:            './dist/',
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
            // BrowserSync Task
            browserSync: {
                // Test Environment
                test: {
                    options: {
                        watchTask: true,
                        server: configs.target.test
                    },
                    bsFiles: {
                        src: [
                            configs.target.test + '*.html',
                            configs.target.test + '**/*.html',
                            configs.target.test + configs.target.testStatic + configs.target.testCSS + '*.css',
                            configs.target.test + configs.target.testStatic + configs.target.testScripts + '*.js'
                        ]
                    }
                },

                // Development Environment
                dev: {
                    options: {
                        watchTask: true,
                        server: configs.target.dev
                    },
                    bsFiles: {
                        src: [
                            configs.target.dev + '*.html',
                            configs.target.dev + '**/*.html',
                            configs.target.dev + configs.target.devStatic + configs.target.devCSS + '*.css',
                            configs.target.dev + configs.target.devStatic + configs.target.devScripts + '*.js'
                        ]
                    }
                },

                // Production Environment
                prod: {
                    options: {
                        watchTask: true,
                        server: configs.target.prod
                    },
                    bsFiles: {
                        src: [
                            configs.target.prod + '*.html',
                            configs.target.prod + '**/*.html',
                            configs.target.prod + configs.target.prodStatic + configs.target.prodCSS + '*.css',
                            configs.target.prod + configs.target.prodStatic + configs.target.prodScripts + '*.js'
                        ]
                    }
                }
            },

            // Copy Task
            copy: {
                // Test Environment
                test: {
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.assets,
                        src:    ['**/*.*', '!**/*.{png,jpg,gif}'],
                        dest:   configs.target.test + configs.target.testStatic + configs.target.testAssets
                    }]
                },

                // Development Environment
                dev: {
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.assets,
                        src:    ['**/*.*', '!**/*.{png,jpg,gif}'],
                        dest:   configs.target.dev + configs.target.devStatic + configs.target.devAssets
                    }]
                },

                // Production Environment
                prod: {
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.assets,
                        src:    ['**/*.*', '!**/*.{png,jpg,gif}'],
                        dest:   configs.target.prod + configs.target.prodStatic + configs.target.prodAssets
                    }]
                }
            },
            
            // Image Minified Task
            imagemin: {
                // Test Environment
                test: {
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.assets,
                        src:    ['**/*.{png,jpg,gif}'],
                        dest:   configs.target.test + configs.target.testStatic + configs.target.testAssets
                    }]
                },
                // Development Environment
                dev: {
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.assets,
                        src:    ['**/*.{png,jpg,gif}'],
                        dest:   configs.target.dev + configs.target.devStatic + configs.target.devAssets
                    }]
                },
                // Production Environment
                prod: {
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.assets,
                        src:    ['**/*.{png,jpg,gif}'],
                        dest:   configs.target.prod + configs.target.prodStatic + configs.target.prodAssets
                    }]
                }
            },

            // JS Hint Task
            jshint: {
                options: {
                    reporter: require('jshint-stylish')
                },
                all: [
                    configs.srcs.root + configs.srcs.scripts + '**/*.js'
                ]
            },

            // Bake Task
            bake: {
                // Testing Environment
                test: {
                    options: {},
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.test,
                        src:    ['**/*.html', '!**/_*.html'],
                        dest:   configs.target.test,
                        ext:    '.html'
                    }]
                },

                // Development Environment
                dev: {
                    options: {},
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.html,
                        src:    ['**/*.html', '!**/_*.html'],
                        dest:   configs.target.dev,
                        ext:    '.html'
                    }]
                },

                // Production Environment
                prod: {
                    options: {},
                    files: [{
                        expand: true,
                        cwd:    configs.srcs.root + configs.srcs.html,
                        src:    ['**/*.html', '!**/_*.html'],
                        dest:   configs.target.prod,
                        ext:    '.html'
                    }]
                }
            },

            // Uglify Task
            uglify: {
                // Production Environment
                prod: {
                    files: [{
                        expand: true,
                        cwd:    configs.target.prod + configs.target.prodStatic + configs.target.prodScripts,
                        src:    configs.files.script + '.js',
                        dest:   configs.target.prod + configs.target.prodStatic + configs.target.prodScripts,
                        ext:    '.min.js'
                    }]
                }
            },

            // Webpack Task
            webpack: {
                // Test Environment
                test: {
                    entry: [configs.srcs.root + configs.srcs.scripts + 'script.js'],
                    output: {
                        filename:   configs.files.script + '.js',
                        path:       configs.target.test + configs.target.testStatic + configs.target.testScripts
                    }
                },
                // Development Environment
                dev: {
                    entry: [configs.srcs.root + configs.srcs.scripts + 'script.js'],
                    output: {
                        filename:   configs.files.script + '.js',
                        path:       configs.target.dev + configs.target.devStatic + configs.target.devScripts
                    }
                },
                // Peoduction Environment
                prod: {
                    entry: [configs.srcs.root + configs.srcs.scripts + 'script.js'],
                    output: {
                        filename:   configs.files.script + '.js',
                        path:       configs.target.prod + configs.target.prodStatic + configs.target.prodScripts
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
                        dest:   configs.target.test + configs.target.testStatic + configs.target.testCSS,
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
                        dest:   configs.target.dev + configs.target.devStatic + configs.target.devCSS,
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
                        dest:   configs.target.prod + configs.target.prodStatic + configs.target.prodCSS,
                        ext:    '.min.css'
                    }]
                }
            },

            // Clean Task
            clean: {
                // Test
                test: [configs.target.test],
                // Development
                dev: [configs.target.dev],
                // Production
                prod: [configs.target.prod],
                // Uglify
                uglify: [
                    configs.target.prod +
                    configs.target.prodStatic +
                    configs.target.prodScripts +
                    configs.files.script + '.js'
                ]
            },

            // Concurrent Task
            concurrent: {
                // Test Environment
                test: [
                    ['clean:test'],
                    'imagemin:test',
                    'copy:test',
                    'webpack:test',
                    'bake:test',
                    'sass:test',
                    'jshint',
                    'notify'
                ],
                testWatch: [
                    'watch:testHTML',
                    'watch:testAssets',
                    'watch:testSASS',
                    'watch:testScript',
                    'jshint'
                ],

                // Development Environment
                dev: [
                    ['clean:dev'],
                    [
                        'imagemin:dev',
                        'copy:dev',
                        'webpack:dev',
                        'bake:dev',
                        'sass:dev'
                    ],
                    'jshint',
                    'notify'
                ],
                devWatch: [
                    [
                        'watch:devHTML',
                        'watch:devAssets',
                        'watch:devSASS',
                        'watch:devScript'
                    ],
                    'jshint'
                ],

                // Production Environment
                prod: [
                    ['clean:prod'],
                    [
                        'imagemin:prod',
                        'copy:prod',
                        'webpack:prod',
                        'bake:prod',
                        'sass:prod',
                        'uglify',
                        'clean:uglify'
                    ],
                    'jshint',
                    'notify'
                ],
                prodWatch: [
                    [
                        'watch:prodHTML',
                        'watch:prodAssets',
                        'watch:prodSASS',
                        'watch:prodScript'
                    ],
                    'jshint',
                    'uglify',
                    'clean:uglify'
                ]
            },

            // Notify
            notify: {
                clean: {
                    options: {
                        message: "Clean Task Finished."
                    }
                },
                sass: {
                    options: {
                        message: "SASS Task Finished."
                    }
                },
                webpack: {
                    options: {
                        message: "Script Generated."
                    }
                },
                bake: {
                    options: {
                        message: "HTML Generated."
                    }
                },
                imagemin: {
                    options: {
                        message: "Image Minified."
                    }
                },
                copy: {
                    options: {
                        message: "File/Folders Copied."
                    }
                },
                uglify: {
                    options: {
                        message: "Script Compressed."
                    }
                }
            },

            // Watch Task
            watch: {
                options: {
                    spawn: false
                },

                // Test Environment
                testHTML: {
                    files: [configs.srcs.root + configs.srcs.test + '**/*.html'],
                    tasks: ['bake:test', 'notify:bake']
                },
                testAssets: {
                    files: [configs.srcs.root + configs.srcs.assets + '**/*.*'],
                    tasks: ['copy:test', 'imagemin:test', 'notify:copy', 'notify:imagemin']
                },
                testSASS: {
                    files: [configs.srcs.root + configs.srcs.scss + '**/*.scss'],
                    tasks: ['sass:test', 'notify:sass']
                },
                testScript: {
                    files: [configs.srcs.root + configs.srcs.scripts + '**/*.js'],
                    tasks: ['webpack:test', 'notify:webpack']
                },

                // Development Environment
                devHTML: {
                    files: [configs.srcs.root + configs.srcs.html + '**/*.html'],
                    tasks: ['bake:dev', 'notify:bake']
                },
                devAssets: {
                    files: [configs.srcs.root + configs.srcs.assets + '**/*.*'],
                    tasks: ['copy:dev', 'imagemin:dev', 'notify:copy', 'notify:imagemin']
                },
                devSASS: {
                    files: [configs.srcs.root + configs.srcs.scss + '**/*.scss'],
                    tasks: ['sass:dev', 'notify:sass']
                },
                devScript: {
                    files: [configs.srcs.root + configs.srcs.scripts + '**/*.js'],
                    tasks: ['webpack:dev', 'notify:webpack']
                },

                // Production Environment
                prodHTML: {
                    files: [configs.srcs.root + configs.srcs.html + '**/*.html'],
                    tasks: ['bake:prod', 'notify:bake']
                },
                prodAssets: {
                    files: [configs.srcs.root + configs.srcs.assets + '**/*.*'],
                    tasks: ['copy:prod', 'imagemin:prod', 'notify:bake']
                },
                prodSASS: {
                    files: [configs.srcs.root + configs.srcs.scss + '**/*.scss'],
                    tasks: ['sass:prod', 'notify:sass']
                },
                prodScript: {
                    files: [configs.srcs.root + configs.srcs.scripts + '**/*.js'],
                    tasks: ['webpack:prod', 'notify:webpack']
                }
            }
        };

        /* ---------- | Grunt Init | ---------- */
        grunt.initConfig(gruntConfigs);

        /* ---------- | Register Tasks | ---------- */
        // Test Environment Tasks
        grunt.registerTask('test:watch', noserve ? ['concurrent:testWatch'] : ['browserSync:test', 'concurrent:testWatch']);
        grunt.registerTask('test', ['concurrent:test']);
        // Development Environment Tasks
        grunt.registerTask('dev:watch', noserve ? ['concurrent:devWatch'] : ['browserSync:dev', 'concurrent:devWatch']);
        grunt.registerTask('dev', ['concurrent:dev']);
        // Production Environment Tasks
        grunt.registerTask('default:watch', noserve ? ['concurrent:prodWatch'] : ['browserSync:prod', 'concurrent:prodWatch']);
        grunt.registerTask('default', ['concurrent:prod']);
    };
})();