"use strict";

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  pump = require('pump'),
  uglify = require('gulp-uglify'),
  pug = require('gulp-pug');
//sassdoc = require('sassdoc'),
//rename = require('gulp-rename'),
//converter = require('sass-convert');

// gulp.task('pug', () => {
//   gulp.src('./src/html/*.pug')
//     .pipe(pug({
//       pretty: true
//     }))
//     .pipe(gulp.dest('./docs/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });

// convertir scss en sass
gulp.task('sassdoc', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(converter({
      from: 'scss',
      to: 'sass',
    }))
    .pipe(sassdoc())
    .pipe(rename((path) => {
      path.extname = ".sass";
    }))
    .pipe(gulp.dest('./src/sass/'));
});


gulp.task('pug', (pg) => {
  pump([
      gulp.src('./src/html/*.pug'),
      pug({
        pretty: true
      }),
      gulp.dest('./docs/'),
      browserSync.reload({
        stream: true
      })
    ],
    pg
  );

});

gulp.task('sass', () => {
  gulp.src(['./src/sass/*.sass', './src/sass/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: false
    })).on('error', sass.logError)
    .pipe(autoprefixer({
      versions: ['last 10 versions']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('compress', (cb) => {
  pump([
      gulp.src(['./src/js/*.js']),
      concat('bundle.js'),
      uglify(),
      gulp.dest('./docs/js')
    ],
    cb
  );

});



gulp.task('js-watch', ['compress'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('server', () => {
  browserSync.init({
    port: '3000',
    server: {
      baseDir: './docs/'
    }
  });
});

gulp.task('default', ['server'], () => {
  gulp.watch(['./src/html/*.pug', './src/html/**/*.pug'], ['pug']);
  gulp.watch(['./src/sass/*.sass', './src/sass/**/*.sass'], ['sass']);
  gulp.watch('./src/js/*.js', ['js-watch']);
  gulp.watch('./docs/index.html').on('change', browserSync.reload);
});
