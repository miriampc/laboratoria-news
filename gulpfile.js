const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const toEs6 = require('gulp-6to5');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');

const config = {
    source:'./src/',
    dist:'./public/'
};

const paths = {
    assets:"assets/",
    html:"**/*.html",
    sass:"scss/**/*.scss",
    js:"js/**/*.js",
    mainSass:"scss/main.scss"
};

const sources = {
    assets:config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    js:config.source + paths.assets + paths.js,
    rootSass: config.source + paths.assets + paths.mainSass
};

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));

});
gulp.task('sass', () => {
    gulp.src(sources.rootSass)
        .pipe(sass({
            outputStyle:"compressed"
        }).on("error",sass.logError)).pipe(gulp.dest(config.dist+paths.assets+"css"));
});

gulp.task('js', () => {
    gulp.src(sources.js)
        .pipe(toEs6())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist + paths.assets +"js"));
});

gulp.task('sass-watch',["sass"], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js-watch',["js"], (done) => {
    browserSync.reload();
    done();
});

gulp.task('html-watch',["html"], (done) => {
    browserSync.reload();
    done();
});
gulp.task('nodemon',  (cb) =>{
    let started = false;
    return nodemon({
        script: 'server.js'
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});
gulp.task('browser-sync', ['nodemon'], () => {
    browserSync.init(null, {
        files: ["public/**/*.*"],
        port: 5000,
        proxy: {
            target: 'localhost:3000/api',
            ws: true
        }
    });
});

gulp.task('bs-watch', ['browser-sync'], (done) => {
    browserSync.reload();
    done();
});

gulp.task("serve", () => {
    browserSync.init({
        server:{baseDir:config.dist}
    });
    gulp.watch(sources.html,["html-watch"]);
    gulp.watch(sources.sass,["sass-watch"]);
    gulp.watch(sources.js,["js-watch"]);
    gulp.watch(["./src/assets/*.html"],["bs-watch"]);
});
