'use strict';
/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8',
					 ignoreFiles: ['.combo.css', '-min.js']
					 }))
    .pipe(gulp.dest('css/'));
});

gulp.task('compress', function() {
  gulp.src('js/source/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('js/source/minify/'))
});

gulp.task('default', ['minify-css', 'compress']);