/**
 * Gulp configuration.
 */
'use strict';

var gulp   = require('gulp');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');


// JAVASCRIPT TASKS
// -----------------------------------------------------------------------------

var js = {
	sourceFiles: 'Source/**/*.js',
	destFile: 'dumbqueryselector.js',
	destDir: '.'
};

gulp.task('lint', function() {
	return gulp.src(js.sourceFiles)
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('javascript', ['lint'], function() {
	return gulp.src(js.sourceFiles)
		.pipe(babel({
			comments: false,
			modules: 'umd',
			moduleIds: true
		}))
		.pipe(concat(js.destFile))
		.pipe(gulp.dest(js.destDir))
});


// TASKS ALIASES
// -----------------------------------------------------------------------------

gulp.task('watch', ['javascript'], function() {
	gulp.watch(js.sourceFiles, ['javascript']);
});

gulp.task('default', ['javascript']);
