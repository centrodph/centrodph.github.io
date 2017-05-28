//////////////////////////////////////////////////////
// Required Modules
//////////////////////////////////////////////////////
var gulp = require("gulp");
var util = require("gulp-util");
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var typeScript = require("gulp-typescript");
var less = require("gulp-less");
var cleanCss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var php = require('gulp-connect-php');
var $ = require('gulp-load-plugins')({lazy: true});

//////////////////////////////////////////////////////
// Dependencies
//////////////////////////////////////////////////////
gulp.task('cssdependencies', function () {
    var files = [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/owl-carousel/owl-carousel/owl.carousel.css',
        'bower_components/owl-carousel/owl-carousel/owl.theme.css',
        'bower_components/font-awesome/css/font-awesome.css'
    ];
    return gulp.src(files)
               .pipe(concat('lib.css'))
               .pipe(cleanCss())
               .pipe(gulp.dest('src/FrontBundle/Resources/public/css/')
    );
});
gulp.task('jsdependencies', function () {
    var files = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-sticky/jquery.sticky.js',
        'bower_components/owl-carousel/owl-carousel/owl.carousel.js',
        'bower_components/bootstrap/dist/js/bootstrap.js'
    ];
    return gulp.src(files)
      .pipe(concat('lib.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src/FrontBundle/Resources/public/js'));
});
gulp.task('fontsdependencies',function(){
    var files  = [
        'bower_components/bootstrap/fonts/**/*.*',
        'bower_components/font-awesome/fonts/**/*.*'
    ];
    return gulp
        .src(files)
        .pipe(gulp.dest('src/FrontBundle/Resources/public/fonts/'));
});
gulp.task('installdeps',['cssdependencies','jsdependencies','fontsdependencies']);

//////////////////////////////////////////////////////
// LESS
//////////////////////////////////////////////////////
gulp.task('styles', function() {
    return gulp
        .src('Minimalista/CSS/*.less')
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest('Minimalista/CSS/'))
        .pipe(gulp.dest('Minimalista/HTML/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    return gulp
        .src('Minimalista/CSS/js/*.js')
        .pipe(gulp.dest('Minimalista/HTML/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//////////////////////////////////////////////////////
// WATCHERS
//////////////////////////////////////////////////////
gulp.task('less-watcher', function() {
    gulp.watch(['Minimalista/CSS/*.less'], ['styles']);
});


//////////////////////////////////////////////////////
// BROWSERSYNC
//////////////////////////////////////////////////////
gulp.task('php', function () {
    php.server({
        base: 'Minimalista/HTML/',
        port: 8010,
        keepalive: true
    });
});
gulp.task('browser-sync', ['php'], function () {
    browserSync({
        proxy: '127.0.0.1:8010/index.php',
        port: 8080,
        open: true,
        notify: false,
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        }
    });
});
gulp.task('serve-php', ['styles','js', 'browser-sync'], function () {
    gulp.watch('Minimalista/CSS/js/*.js', ['js']);
    gulp.watch('Minimalista/CSS/*.less', ['styles']);
    gulp.watch("Minimalista/HTML/*.php").on('change', browserSync.reload);
});




//////////////////////////////////////////////////////
// Help
//////////////////////////////////////////////////////
gulp.task('help',function(){
    $.taskListing();
});
gulp.task('default',['help']);
