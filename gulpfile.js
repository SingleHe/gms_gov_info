var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var swig= require('gulp-swig');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence('clean-build',['vendor-js', 'build-js', 'build-sass', 'build-template'], cb);
});

gulp.task('dev', function(cb) {
    runSequence('clean-build',['vendor-js', 'build-js', 'build-sass', 'build-template'], 'watch', cb);
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

gulp.task('build-sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/'));
});

gulp.task('build-template', function () {
    // swig template
    // { cache: false } for watch

    return gulp.src('template/**/*.html')
    .pipe(swig({defaults: { cache: false }}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build-js']);
    gulp.watch('src/**/*.scss', ['build-sass']);
    gulp.watch('template/**/*.*', ['build-template']);
});