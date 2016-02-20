var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('app-styles', function() {
    gulp.src('app/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(concat('app-styles.min.css'))
        .pipe(gulp.dest('app/dist/css/')
    );
});

gulp.task('app-scripts', function() {
    gulp.src('app/src/js/*.js')
        .pipe(uglify())
        .pipe(concat('app-scripts.min.js'))
        .pipe(gulp.dest('app/dist/js/')
    );
});

gulp.task('lib-styles', function() {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/lightbox2/dist/css/lightbox.min.css'
    ])
        .pipe(concat('lib-styles.min.css'))
        .pipe(gulp.dest('app/dist/css/')
    );
});

gulp.task('lib-scripts', function() {
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/vue/dist/vue.min.js',
        'node_modules/lightbox2/dist/js/lightbox.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(concat('lib-scripts.min.js'))
        .pipe(gulp.dest('app/dist/js/')
    );
});

gulp.task('dev', function() {
    gulp.watch('app/src/scss/*.scss', ['app-styles']);
});

gulp.task('default', ['lib-styles', 'lib-scripts', 'app-styles', 'app-scripts']);