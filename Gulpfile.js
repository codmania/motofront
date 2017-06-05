var gulp = require('gulp');
var gutil = require('gulp-util');
var gsass = require('gulp-sass');
var server = require('gulp-express');

var paths = {
    sass: ['assets/sass/**/*.scss']
};

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(gsass().on('error', gutil.log))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
})

gulp.task('serve', function() {
    gulp.run('default');
    gulp.run('watch');
});
