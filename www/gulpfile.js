var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('babel', function () {
    return gulp.src('./es6/**/*.js')
        .pipe(babel({ presets: ['es2015']}))
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', ['sass', 'babel']);