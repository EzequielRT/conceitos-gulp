const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');

function javascript() {

    return src('./src/js/*.js')
        .pipe(minifyJS())
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('dist/js'));

}

function css() {

    return src('./src/css/*.css')
        .pipe(minifyCSS({'maxLineLen':80, 'uglyComments': true}))
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('dist/css'));

}

exports.default = parallel(javascript, css);