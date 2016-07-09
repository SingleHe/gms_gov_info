var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass')
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence('clean-build',['vendor-js', 'build-js', 'build-sass'], cb);
});

gulp.task('dev', function(cb) {
    runSequence('clean-build',['vendor-js', 'build-js', 'build-sass'], 'watch', cb);
});

gulp.task('clean-build', function () {
    return gulp.src('build/', {read: false})
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


gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build-js']);
    gulp.watch('src/**/*.scss', ['build-sass']);
});