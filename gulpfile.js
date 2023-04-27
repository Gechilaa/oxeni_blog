const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function TaskBuilder() {
    return src('styles/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('styles/css'))
}

function TaskWatcher() {
    watch(['styles/**/*.scss', '*.html'], TaskBuilder)
}

exports.default = series(TaskBuilder, TaskWatcher)