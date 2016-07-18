var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var Server = require('karma').Server;
gulp.task('MyTask', function(){
console.log('hola');
});


gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


gulp.task('files-scripts', function(){
 gulp.src('app/scripts/**/*.js')
 		.pipe(concat('minified.js'))
 			.pipe(gulp.dest('./dist/'))

});

gulp.task('compile-less', function(){
 gulp.src('app/**/*.less')
 		.pipe(less())
		.pipe(gulp.dest('./dist/'))
});

gulp.task('hint', function(){
gulp.src('app/**/*.js')
.pipe(jshint())
.pipe(jshint.reporter('default'))
});


gulp.task('production', (['hint'], ['compile-less'], ['files-scripts']));

gulp.task('default', ['MyTask']);
