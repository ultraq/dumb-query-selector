/**
 * Gulp configuration.
 */
/* global require */
'use strict';

var gulp   = require('gulp');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var mocha  = require('gulp-mocha-phantomjs');


// JAVASCRIPT TASKS
// -----------------------------------------------------------------------------

var js = {
	sourceFiles: 'Source/**/*.js',
	testFiles: 'Tests/Tests.html',
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
		.pipe(gulp.dest(js.destDir));
});

gulp.task('test', function() {
	return gulp.src(js.testFiles)
		.pipe(mocha());
});


// TASKS ALIASES
// -----------------------------------------------------------------------------

gulp.task('watch', ['javascript', 'test'], function() {
	gulp.watch(js.sourceFiles, ['javascript', 'test']);
});

gulp.task('default', ['javascript']);
