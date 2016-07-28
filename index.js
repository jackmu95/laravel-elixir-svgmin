var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

var config = Elixir.config;

/*
 |----------------------------------------------------------------
 | SVG Task
 |----------------------------------------------------------------
 |
 | This task will manage your SVG minfication.
 |
 */

loadConfig();

Elixir.extend('svg', function(src, output, baseDir, options) {
    var paths = getPaths(src, baseDir, output);
    options = options || {};

    new Elixir.Task('svg', function() {
        return gulp.src(paths.src.path)
            .pipe(svgmin(options.svgminOptions || config.svg.svgminOptions))
            .on('error', function(e) {
                new Elixir.Notification().error(e, 'SVG minification failed!');
                this.emit('end');
            })
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Elixir.Notification('SVG minified!'));
    })
    .watch(paths.src.path)
    .ignore(paths.output.path);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param {string|Array} src
 * @param {string|null} baseDir
 * @param {string|null} output
 * @return {GulpPaths}
 */
 function getPaths(src, baseDir, output) {
    return new Elixir.GulpPaths()
        .src(src, baseDir || config.get('assets.svg.folder'))
        .output(output || config.get('public.svg.outputFolder'));
}


/**
 * Load the default SVG config.
 */
function loadConfig() {
    config.svg = {
        folder: 'svg',
        outputFolder: 'svg',
        svgminOptions: {}
    };
}
