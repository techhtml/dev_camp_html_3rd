var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var base64 = require('gulp-base64');
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer');

var plugins = [
  autoprefixer({browsers: ['last 2 version']})
];
gulp.task('default', function() {
    return gulp.src('./public/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(postcss(plugins))
    .pipe(base64())
    .pipe(gulp.dest('./public/stylesheets/'))
})