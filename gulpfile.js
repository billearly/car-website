var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

gulp.task('clean', function () {
    return gulp.src(['./build/**/*', './dist/**/*'])
        .pipe(clean({ read: false }));
});

gulp.task('copy', function () {
    return gulp.src(['src/index.html', 'src/images/*.png'], { base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    return gulp.src(['src/js/*.js'], { base: 'src' })
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest(
            'build/rev-manifest.json',
            {
                base: 'build',
                merge: true
            }
        ))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
    return gulp.src(['src/css/*.scss'], { base: 'src' })
        .pipe(sass())
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest(
            'build/rev-manifest.json',
            {
                base: 'build',
                merge: true
            }
        ))
        .pipe(gulp.dest('./build'));
});

gulp.task('rev-replace', function () {
    var manifest = gulp.src('./build/rev-manifest.json');

    return gulp.src('src/index.html')
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*', gulp.series('build'));
});

gulp.task('build', gulp.series('clean', 'copy', 'js', 'sass', 'rev-replace'));
gulp.task('default', gulp.series('build'));