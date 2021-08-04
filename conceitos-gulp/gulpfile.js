const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');
const minifyIMG = require('gulp-image');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');

function javascript() {

    return src('src/js/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(minifyJS())
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('dist/assets/js'));

}

function css() {

    return src('src/css/*.css')
        .pipe(minifyCSS({'maxLineLen':80, 'uglyComments': true}))
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('dist/assets/css'));

}

function convertSass() {
    return src('src/css/*.scss')
        .pipe(sass())
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(dest('dist/assets/css'));
}

function optimizeImage() {
    return src('src/images/*.jpg')
        .pipe(minifyIMG())
        .pipe(dest('dist/assets/image'));

}

exports.default = parallel(javascript, css, convertSass, optimizeImage);