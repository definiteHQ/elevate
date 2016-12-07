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
    // Export Grunt
    module.exports = (grunt) => {
        // Load Grunt Tasks
        require('load-grunt-tasks')(grunt);

        /* |----- Base Path ----- | */
        let paths =     {};
        paths.root =    './';
        paths.srcs =    paths.root + 'srcs/';
        paths.scss =    paths.srcs + 'scss/';
        paths.script =  paths.srcs + 'scripts/';
        paths.html =    paths.srcs + 'html/';
        paths.asset =   paths.srcs + 'assets/';

        /* |----- Source and Target files -----| */
        let srcs = {
            sass: {
                cwd: paths.scss,
                source: ['**/*.scss'],
                target: paths.root + 'assets/css'
            },
            script: {
                cwd: paths.script,
                source: ['elevate.js'],
                target: paths.root + 'assets/js'
            },
            html: {
                cwd: paths.html,
                source: ['**/*.html', '!**/_*.html'],
                target: paths.root
            },
            asset: {
                cwd: paths.asset,
                source: ['**/*'],
                target: paths.root + 'assets'
            },
            browserSync: {
                bsFiles: [
                    paths.root + '**/*.html',
                    paths.root + 'assets/**/*'
                ]
            }
        };

        /* |----- Watch Target -----| */
        let watch = {
            sass: {
                files:  [srcs.sass.cwd + srcs.sass.source],
                tasks:  ['concurrent:sass']
            },
            webpack: {
                files:  [srcs.script.cwd + '**/*.js'],
                tasks:  ['concurrent:webpack']
            },
            bake: {
                files:  [srcs.html.cwd + '**/*.html'],
                tasks:  ['concurrent:bake']
            },
            copy: {
                files:  [srcs.asset.cwd + '**/*'],
                tasks:  ['concurrent:copy']
            }
        };

        /* |----- Task Options -----| */
        let options = {
            sass: {
                sourcemap:  'none',
                style:      'compact'
            },
            webpack: {},
            bake: {},
            copy: {},
            watch: {
                spawn: false
            },
            notify: {
                sass: {
                    options: {
                        title:      "SASS Task",
                        message:    "SASS/SCSS files compiled!"
                    }
                },
                webpack: {
                    options: {
                        title:      "Webpack Task",
                        message:    "JS files compiled!"
                    }
                },
                copy: {
                    options: {
                        title:      "Copy Task",
                        message:    "All asset files copied!"
                    }
                },
                bake: {
                    options: {
                        title:      "Bake Task",
                        message:    "All HTML files baked!"
                    }
                }
            },
            browserSync: {
                watchTask:  true,
                server:     paths.root
            }
        };

        /* |----- Register Tasks ----- | */
        let tasks = {
            clean: [
                paths.root + '*.html',
                paths.root + 'pages',
                paths.root + 'assets'
            ],
            sass: {
                options:    options.sass,
                default: {
                    files:  [{
                        expand: true,
                        cwd:    srcs.sass.cwd,
                        src:    srcs.sass.source,
                        dest:   srcs.sass.target,
                        ext:    '.css'
                    }]
                }
            },
            webpack: {
                options:    options.webpack,
                default: {
                    entry:  srcs.script.cwd + srcs.script.source,
                    output: {
                        path:       srcs.script.target,
                        filename:   'elevate.js'
                    }
                }
            },
            bake: {
                options:    options.bake,
                default: {
                    files: [{
                        expand: true,
                        cwd:    srcs.html.cwd,
                        src:    srcs.html.source,
                        dest:   srcs.html.target,
                        ext:    '.html'
                    }]
                }
            },
            copy: {
                options:    options.copy,
                default: {
                    files:  [{
                        expand: true,
                        cwd:    srcs.asset.cwd,
                        src:    srcs.asset.source,
                        dest:   srcs.asset.target
                    }]
                }
            },
            concurrent: {
                sass:       [['sass'], 'notify:sass'],
                webpack:    [['webpack'], 'notify:webpack'],
                bake:       [['bake'], 'notify:bake'],
                copy:       [['copy'], 'notify:copy']
            },
            notify: {
                sass:       options.notify.sass,
                webpack:    options.notify.webpack,
                bake:       options.notify.bake,
                copy:       options.notify.copy
            },
            watch: {
                options:    options.watch,
                sass:       watch.sass,
                webpack:    watch.webpack,
                bake:       watch.bake,
                copy:       watch.copy
            },
            browserSync: {
                options:    options.browserSync,
                default:    srcs.browserSync
            }
        };

        // Grunt Init
        grunt.initConfig(tasks);

        // Register Task
        grunt.registerTask('serve', ['browserSync', 'watch']);
        grunt.registerTask('default', ['concurrent']);
    };
})();