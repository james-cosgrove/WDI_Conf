var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

const sassPath = './app/scss/**/*.scss';
const scriptPath = './app/javascript/app.js';
const htmlPath = './app/index.html';


// compile scss into css
gulp.task('sass-to-css', function() {
  return gulp.src(sassPath)
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('reload', function() {
  browserSync.reload();
});

// watches for any saved changes on js, html and scss files
gulp.task('watch', ['sass-to-css', 'sync'], function() {
  gulp.watch(sassPath, ['sass-to-css']);
  gulp.watch(scriptPath, ['reload']);
  gulp.watch(htmlPath, ['reload']);
});

gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});
