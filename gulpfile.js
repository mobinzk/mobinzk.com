var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass({ 
        	outputStyle: 'compressed',
        	includePaths: require('node-reset-scss').includePath 
        }))
        .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
   	gulp.watch('sass/*.scss', ['sass']);
});