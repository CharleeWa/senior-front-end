'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync').create();

// Paths
let Paths = {
  ENTER: './',
  HTML: 'html/**/*.html',
  JS: 'javascript/**/*.js',
  CSS: 'css/**/*.css',
}

// Static Server
gulp.task('serve', function (done) {
  browserSync.init({
    server: Paths.ENTER
  });
  done();
});

// watching files
gulp.task('watch', function (done) {
  gulp.watch(Paths.HTML).on('change', browserSync.reload);
  gulp.watch(Paths.JS).on('change', browserSync.reload);
  gulp.watch(Paths.CSS).on('change', browserSync.reload);
  done();
});

gulp.task('default', gulp.series('serve', 'watch'));