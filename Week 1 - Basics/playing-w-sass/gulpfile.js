var gulp                = require('gulp');
var autoprefixer        = require('gulp-autoprefixer');
var concat              = require('gulp-concat');
var gutil               = require('gulp-util');
var minifycss           = require('gulp-minify-css');
var nodemon             = require('gulp-nodemon');
var notify              = require('gulp-notify');
var plumber             = require('gulp-plumber');
var rename              = require('gulp-rename');
var sass                = require('gulp-sass');
var sourcemaps          = require('gulp-sourcemaps');

var path = {
    styles: ['./assets/sass/**/*.scss', './assets/sass/*.scss']
};

gulp.task('css', function() {
    return gulp.src('./assets/sass/application.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.log(gutil.colors.red.bold('\n\n =================\n'),
                    gutil.colors.red.bold('    Error compiling sass!\n'),
                    gutil.colors.yellow('    Check line ' +
                        err.lineNumber + ' in ' + err.fileName + '\n'),
                    '    ' + err.message + '\n',
                    gutil.colors.red.bold('=================\n')
                );
                gutil.beep();
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: [
                'last 2 version',
                'safari 5',
                'ie 8',
                'ie 9',
                'opera 12.1'
            ],
            remove: true
        }))
        .pipe(concat('style.min.css'))
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./public/css'))
        .pipe(notify({
            message: 'Successfully compiled sass.'
        }));
});

gulp.task('watch', function() {
    gulp.watch(path.styles, ['css']);
});

gulp.task('default', ['css'], function() {
    nodemon({
        script: 'server.js'
    })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function() {
        console.log('Server restarted');
    });
});
