import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

let pkg = require('../package.json');

gulp.task('run:dev', ['build:dev:watch']);

gulp.task('nodemon', () => {
  nodemon({
    script: pkg.main,
    ignore: [
      'website/client-old/*',
      'website/views/*',
      'common/dist/script/content/*',
    ],
  });
});
