const gulp       = require('gulp'),
      sass       = require('gulp-sass'),
      inject     = require('gulp-inject'),
      webpack    = require('gulp-webpack'),
      bs         = require('browser-sync').create();

var sources = gulp.src(['./public/styles/**/*.css'], {read: false});

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
             .pipe(gulp.dest('./public/styles'))
             .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['fonts', 'vendor', 'browser-sync'], () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/scripts/**/*.js').on('change', bs.reload);
  gulp.watch('./public/**/*.html').on('change', bs.reload);
});

gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
             .pipe(gulp.dest('public/fonts'));
});

// gulp.task('bundle', () => {
//   return gulp.src('app/**/*.*')
//              .pipe(webpack({
//                 watch: true,
//                 entry: './app/app.module.js',
//                 output: {
//                   filename: 'app.bundle.js'
//                 },
//                 module: {
//                   loaders: [
//                     { test: /\.html$/, loader: 'ng-cache-loader' },
//                     { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015'] } },
//                     { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' }
//                   ]
//                 }
//               }))
//              .pipe(gulp.dest('public/scripts/'));
// });

// gulp.task('vendor:css', () => {
//   return gulp.src([
//     'node_modules/bulma/css/bulma.css',
//     'node_modules/font-awesome/css/font-awesome.css'
//   ])
//   .pipe(gulp.dest('public/styles/vendor/'));
// });

gulp.task('vendor', ['mqtt', 'jquery', 'rxjs', 'paho.mqtt.js']);

gulp.task('mqtt', () => {
  return gulp.src('node_modules/mqtt/mqtt.js')
             .pipe(webpack({
                output: {
                  library: 'mqtt',
                  filename: 'mqtt.js' 
                }
              }))
             .pipe(gulp.dest('public/scripts/vendor/'));
});

gulp.task('jquery', () => {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
             .pipe(webpack({
                output: {
                  library: '$',
                  filename: 'jquery.js'
                }
              }))
             .pipe(gulp.dest('public/scripts/vendor/'));
});

gulp.task('rxjs', () => {
  return gulp.src('node_modules/rxjs/Rx.js')
             .pipe(webpack({
                output: {
                  library: 'Rx',
                  filename: 'rxjs.js'
                }
              }))
             .pipe(gulp.dest('public/scripts/vendor/'));
});

gulp.task('paho.mqtt.js', () => {
  return gulp.src('node_modules/paho.mqtt.js/src/mqttws31.js')
             .pipe(webpack({
                output: {
                  library: 'PahoMQTT',
                  filename: 'mqttws31.js'
                }
              }))
             .pipe(gulp.dest('public/scripts/vendor/'));
});

// gulp.task('angular', () => {
//   gulp.src('node_modules/angular/angular.min.js.map')
//       .pipe(gulp.dest('public/scripts/vendor/'));
//   return gulp.src('node_modules/angular/angular.min.js')
//              .pipe(webpack({
//                 output: {
//                   library: 'angular',
//                   filename: 'angular.js'
//                 }
//               }))
//              .pipe(gulp.dest('public/scripts/vendor/'));
// });
