const gulp = require('gulp');
const sass = require('gulp-sass');
const input = './style/**/*.scss';
const output = './style/';

gulp.task('sass', () => {
    return gulp.src(input) 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task('default', ['sass'], () => {
   gulp.watch(input, ['sass']); 
});