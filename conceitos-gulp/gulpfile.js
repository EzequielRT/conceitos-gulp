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

exports.build = parallel(javascript, css, images); // Roda todas as tarefas em paralelo

exports.build = series(clean, rename); // Roda uma tarefa, espera concluir e vai para a proxima