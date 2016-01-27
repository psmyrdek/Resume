var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/dist/css/'));
});

gulp.task('default', function() {
    gulp.watch('app/src/scss/*.scss', ['styles']);
});