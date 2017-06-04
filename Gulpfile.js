var gulp = require('gulp');
var gutil = require('gulp-util');
var gsass = require('gulp-sass');
var server = require('gulp-express');

gulp.task('sass', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(gsass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/sass/**/*.scss',['sass']);
});

gulp.task('serve', function() {
    server.run(['server.js']);
    gulp.run('default');
    gulp.run('watch');
});
