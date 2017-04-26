var gulp = require('gulp');
var csso = require('gulp-csso');
var includer = require('gulp-htmlincluder');
var connect = require('gulp-connect');

gulp.task('min', function () {
    return gulp.src('dev/css/style.css')
        .pipe(csso())
        .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload());
});


gulp.task('htmlIncluder', function() {
    gulp.src('dev/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch', 'htmlIncluder', 'gulp-csso']);