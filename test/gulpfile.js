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


gulp.task('less', function () {
  return gulp.src('app/styles/styles.less')
    .pipe(less({
      compress: true,
    }))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('app/styles'));
});


gulp.task('JsHint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
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
        .pipe(livereload());
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/styles/**/*.less', ['compile-less'] );
  gulp.watch('app/**/*.js', ['JsHint'])
});


gulp.task('production', ['JsHint','compile-less','files-scripts'], function(){   
  gulp.src(['app/**/*.js','app/**/*.js'])
  .pipe(gulp.dest('dist/scripts'));
  gulp.src('app/**/.css')
  .pipe(gulp.dest('dist/styles'));
  gulp.src('app/images/**')
  .pipe(gulp.dest('dist/images'));
  gulp.src('app/**.html')
  .pipe(gulp.dest('dist'));
});



gulp.task('default', ['MyTask']);