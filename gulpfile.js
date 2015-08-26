var gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
plumber = require('gulp-plumber'),
livereload = require('gulp-livereload'),
sass = require('gulp-sass'),
concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src(['./public/*.scss', './public/**/*.scss'])
  .pipe(plumber())
  .pipe(sass({
   includePaths: ['public/bower_components/foundation/scss']
 }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./public/'))
  .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(['./public/*.scss', './public/**/*.scss'], ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    watch: ['./app', './config', './app.js'],
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
  ]);
