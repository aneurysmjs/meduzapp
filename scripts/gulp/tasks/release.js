const gulp = require('gulp'),
  conventionalChangelog = require('gulp-conventional-changelog');
  bump = require('gulp-bump');
  fs = require('fs');

gulp.task('changelog', () => {
  return gulp.src('CHANGELOG.md', {
    buffer: false
  })
  .pipe(conventionalChangelog({
    preset: 'angular' // Or to any other commit message convention you use.
  }))
  .pipe(gulp.dest('./'));
});