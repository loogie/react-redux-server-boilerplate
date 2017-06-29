const gulp          = require('gulp');
const gls           = require('gulp-live-server');
const sass          = require('gulp-sass');
const source        = require('vinyl-source-stream');
const browserify    = require('browserify');
const minifyify     = require('minifyify');
const babelify      = require('babelify');
const exec = require('child_process').exec;
const plumber = require('gulp-plumber');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const npmcheck = require('gulp-npm-check');

gulp.task('deps', function(cb) {
  npmcheck(cb);
});

var paths = {
  main_css : [ 'app/client/stylesheets/main.scss' ],
  css      : [ 'app/client/stylesheets/**/*.scss' ],
  main_js  : [ 'app/client/index.js' ],
  js       : [ 'app/client/**/*.js*' ],
};



gulp.task('css', function() {
  return gulp .src(paths.main_css)
              .pipe(plumber())
              .pipe(
                sass({
                  outputStyle: IS_PRODUCTION ? 'compressed' : 'nested'
                }).on('error', sass.logError)
              )
              .pipe(gulp.dest('app/static/css/'));
});

gulp.task('js', function() {
  var bundler = browserify(paths.main_js)
                .transform('babelify', {
                  presets : [ 'es2015', 'react' ]
                });

  if (IS_PRODUCTION) {
    bundler = bundler.plugin('minifyify', {
      map      : false,
      compress : {
        drop_debugger : true,
        drop_console  : true
      }
    })
  }

  bundler.bundle().on('error', function(err) {
    console.error('[browserify error]', err.message);
  }).pipe(source('bundle.js'))
    .pipe(gulp.dest('app/static/js'));
});

gulp.task('serve', ['css', 'js' ], function () {

  //Rethinkdb connection
  let command = 'rethinkdb -d ' + __dirname + "\\data";
  console.log(command);
  exec(command, function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
  });

  // Generic watch tasks for SASS and Browserify
  gulp.watch(paths.css, [ 'css' ]);
  gulp.watch(paths.js,  [ 'js'  ]);

  // Start the app server.
  var server = gls('app/server/index.js', { stdio : 'inherit' });
  server.start();

  // Reload server when backend files change.
  gulp.watch([ 'app/server/**/*.js' ], function() {
    server.start.bind(server)();
  });

  // Notify server when frontend files change.
  gulp.watch([ 'app/static/**/*.{css,js,html}' ], function(file) {
    server.notify(file);
  });
});

gulp.task('default', [ 'serve' ]);
