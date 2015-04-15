/* ======== If gulp does not work ======== */
/* =======================================
   In Terminal:

   > sudo npm uninstall -g gulp
   > sudo npm install -g gulp

   In your project directory:

   > sudo npm install
   ======================================= */

var _                   = require('lodash');
var gulp                = require('gulp');
var gls                 = require('gulp-live-server');
var autoprefixer        = require('gulp-autoprefixer');
var concat              = require('gulp-concat');
var gutil               = require('gulp-util');
var imagemin            = require('gulp-imagemin');
var jshint              = require('gulp-jshint');
var minifycss           = require('gulp-minify-css');
var path                = require('path');
var plumber             = require('gulp-plumber');
var rename              = require('gulp-rename');
var sass                = require('gulp-sass');
var sourcemaps          = require('gulp-sourcemaps');
var uglify              = require('gulp-uglify');

var srcPaths = {
    script: ['./assets/js/**/*.js', './assets/js/*.js'],
    styles: ['./assets/sass/**/*.scss', './assets/sass/*.scss'],
    image: [
        './assets/img/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,gif,GIF}',
        './assets/img/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,gif,GIF}'
    ]
};

gulp.task('img', function() {
    return gulp.src(srcPaths.image, { base:'./assets/img/' })
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 4
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./public/img'));
});

gulp.task('lint', function() {
    return gulp.src(srcPaths.script)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(plumber.stop());
});

gulp.task('js', function() {
    return gulp.src(srcPaths.script)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(plumber.stop())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'));
});

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
        .pipe(gulp.dest('./public/css'));
});

gulp.task('serve', function() {
    var server = gls.new('server.js');
    server.start();

    gulp.watch(srcPaths.script, ['lint', 'js']);
    gulp.watch(srcPaths.styles, ['css']);
    gulp.watch(srcPaths.image, ['img']);
    gulp.watch('server.js', server.start);
    gulp.watch('public/**/*.*', server.notify);
});

gulp.task('default', ['img', 'lint', 'js', 'css', 'serve']);
