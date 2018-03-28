var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var del = require('del');

gulp.task('delete', function () {
    return del([
        './build/**/*',
        './dist/**/*'
    ]);
});

gulp.task('copy', function () {
    return gulp.src(['src/index.html', 'src/images/*.png'], { base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('rev', function () {
    return gulp.src(['src/css/*.css', 'src/js/*.js'], { base: 'src' })
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build'));
});

gulp.task('rev-replace', function () {
    var manifest = gulp.src('./build/rev-manifest.json');

    return gulp.src('src/index.html')
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('delete', 'copy', 'rev', 'rev-replace'));