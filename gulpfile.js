var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('styles', function() {
    gulp.src('app/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('app/dist/css/')
    );
});

gulp.task('scripts', function() {
    gulp.src('app/src/js/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('app/dist/js/')
    );
});

gulp.task('dev', function() {
    gulp.watch('app/src/scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);