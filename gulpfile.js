var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  sass: './*.scss',
};

gulp.task('styles', function() {
	return gulp.src(paths.sass)
    	.pipe(sass())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['styles']);
});

gulp.task('default', ['init','watch']);
gulp.task('init', ['styles']);
