var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task('browserify', function(){
  return browserify('./src/app.jsx')
         .transform(babelify,{presets:['es2015','react']})
         .bundle()
         .pipe(source('bundle.js'))
         .pipe(gulp.dest('dist'));
});
gulp.task('default',function(){
	gulp.run('browserify');
	gulp.watch('src/app.jsx',function(){
		gulp.run('browserify');
	});
});