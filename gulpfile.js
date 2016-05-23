// Load plugins
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

gulp.task('dev-server', function () {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: "app/",
      open: true
    }));
});