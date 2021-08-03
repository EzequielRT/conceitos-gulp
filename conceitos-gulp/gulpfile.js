const { series, parallel } = require('gulp');

function images(callback) {

    callback();
}

function javascript(callback) {

    callback();
}

function css(callback) {

    callback();
}

function clean(callback) {

    callback();
}

function rename(callback) {

    callback();
}

exports.build = series(
    clean,
    parallel(
        javascript,
        css,
        images
    ),
    rename
);