const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
 
gulp.task('sass', function(){
    gulp.src('./sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded',
        indentWidth: 4,
    }))
    .pipe(gulp.dest('./css'));
});
