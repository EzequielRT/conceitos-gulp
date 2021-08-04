const { src, dest } = require('gulp');
const rename = require('gulp-rename');

exports.default = function () {

    return src('./src/js/**/*.js')
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('./dist'));

}