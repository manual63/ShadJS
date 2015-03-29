var gulp = require( 'gulp' ),
uglify = require('gulp-uglify'),
rename = require('gulp-rename');

var directories = [ './src/js/*js' ];

gulp.task( 'default', [ 'move', 'uglifyjs']);

gulp.task( 'move', function() {
	gulp.src( directories, { base: './src' })
		.pipe( gulp.dest('./dist/'));
});
 
gulp.task('uglifyjs', function() {
  gulp.src('./src/js/*.js')
    .pipe(uglify())
	.pipe(rename({
		extname: '.min.js'
	}))
    .pipe(gulp.dest('./dist/js'));
});