const gulp       = require('gulp'),
      sass       = require('gulp-sass'),
      inject     = require('gulp-inject'),
      webpack    = require('gulp-webpack'),
      bs         = require('browser-sync').create();

var sources = gulp.src(['./public/styles/**/*.css'], {read: false});

var destination = 'public/';

gulp.task('set-dist', () => {
  destination = 'dist/';
});

gulp.task('browser-sync', ['sass'], () => {
  bs.init({
    server: {
      baseDir: './public'
    }
  });
});

gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest(destination + 'styles'))
             .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['fonts', 'vendor', 'browser-sync'], () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/scripts/**/*.js').on('change', bs.reload);
  gulp.watch('./public/**/*.html').on('change', bs.reload);
});

gulp.task('dist', ['set-dist', 'fonts', 'vendor', 'sass', 'copy:js', 'copy:html']);

gulp.task('copy:js', () => {
  gulp.src([
    'public/scripts/torque-service.js',
    'public/scripts/follow-car-control.js',
    'public/scripts/view-model.js',
    'public/scripts/main.js'
  ])
  .pipe(gulp.dest(destination + 'scripts'));
});

gulp.task('copy:html', () => {
  gulp.src([
    'public/index.html'
  ])
  .pipe(gulp.dest(destination));
});

gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
             .pipe(gulp.dest(destination + 'fonts'));
});

gulp.task('vendor', ['mqtt', 'jquery', 'rxjs', 'paho.mqtt.js']);

gulp.task('mqtt', () => {
  return gulp.src('node_modules/mqtt/mqtt.js')
             .pipe(webpack({
                output: {
                  library: 'mqtt',
                  filename: 'mqtt.js' 
                }
              }))
             .pipe(gulp.dest(destination + 'scripts/vendor/'));
});

gulp.task('jquery', () => {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
             .pipe(webpack({
                output: {
                  library: '$',
                  filename: 'jquery.js'
                }
              }))
             .pipe(gulp.dest(destination + 'scripts/vendor/'));
});

gulp.task('rxjs', () => {
  return gulp.src('node_modules/rxjs/Rx.js')
             .pipe(webpack({
                output: {
                  library: 'Rx',
                  filename: 'rxjs.js'
                }
              }))
             .pipe(gulp.dest(destination + 'scripts/vendor/'));
});

gulp.task('paho.mqtt.js', () => {
  return gulp.src('node_modules/paho.mqtt.js/src/mqttws31.js')
             .pipe(webpack({
                output: {
                  library: 'PahoMQTT',
                  filename: 'mqttws31.js'
                }
              }))
             .pipe(gulp.dest(destination + 'scripts/vendor/'));
});
