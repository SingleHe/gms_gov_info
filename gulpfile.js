var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var swig= require('gulp-swig');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');

gulp.task('default', function(cb) {
    runSequence('clean-build',['vendor-js', 'build-js', 'vendor-css', 'build-sass', 'build-template'], cb);
});

gulp.task('dev', function(cb) {
    runSequence('clean-build',['vendor-js', 'build-js', 'vendor-css', 'build-sass', 'build-template'], 'watch', cb);
});

gulp.task('clean-build', function () {
    // clean built css & js
    // clean built html
    return gulp.src([
                'build/',
                './**/*.html',
                '!template/**/*.html'
            ], {read: false})
            .pipe(clean());
});

gulp.task('vendor-js', function () {
    return gulp.src([
                'node_modules/jquery/dist/jquery.js',
            ])
            .pipe(uglify({
                preserveComments: 'license'
            }))
            .pipe(concat('vendor.min.js'))
            .pipe(gulp.dest('build/'));

});

gulp.task('build-js', function () {
    return gulp.src(
                'src/**/*.js'
            )
            .pipe(uglify())
            .pipe(gulp.dest('build/'));

});

gulp.task('vendor-css', function () {
    return gulp.src([
                'node_modules/normalize.css/normalize.css',
            ])
            .pipe(cssmin())
            .pipe(concat('vendor.min.css'))
            .pipe(gulp.dest('build/'));

});

gulp.task('build-sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/'));
});

gulp.task('build-template', function () {
    // swig template
    // { cache: false } for watch
    var stream = gulp.src('template/**/*.html')
    .pipe(plumber())
    .pipe(swig({defaults: { cache: false }}))
    .pipe(gulp.dest('./'));

    return stream;
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build-js']);
    gulp.watch('src/**/*.scss', ['build-sass']);
    gulp.watch('template/**/*.*', ['build-template']);
});