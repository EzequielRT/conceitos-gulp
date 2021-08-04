const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');

exports.default = function () {

    return src('./src/js/**/*.js')
        .pipe(minifyJS())
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('./dist'));

}