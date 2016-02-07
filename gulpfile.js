var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('app/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('app/dist/css/')
    );
});

gulp.task('dev', function() {
    gulp.watch('app/src/scss/*.scss', ['styles']);
});

gulp.task('default', ['styles']);