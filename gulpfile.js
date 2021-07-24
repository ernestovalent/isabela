const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));

function buildScripts(){
  return gulp.src('src/js/*.js')
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(gulp.dest('assets/js/'));
}

function buildStyles(){
  return gulp.src('src/sass/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('assets/css/'));
}

exports.script = buildScripts;
exports.style = buildStyles;
exports.watch = function () {
  gulp.watch('src/sass/*.sass',['sass']);
  gulp.watch('src/js/*.js',['babel']);
}