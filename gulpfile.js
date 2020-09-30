const { src, dest, task, series, watch } = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;

const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/css/main.scss'
];

task( 'clean:css', () => {
    return src( 'css/**/*', { read: false })
        .pipe( rm() )
})

task( 'clean:scripts', () => {
    return src( 'scripts/**/*', { read: false })
        .pipe( rm() )
})

task('styles', ()=> {
    return src(styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(gulpif(env === 'prod', autoprefixer({
            cascade: false
        })))
        .pipe(gulpif(env === 'prod', cleanCSS()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest('css'));
});

task('scripts', () => {
    return src('src/scripts/*.js')
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat('main.js', {newLine: ';'}))
        .pipe(gulpif(env === 'prod', babel({
            presets: ['@babel/env']
        })))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest('js'));
});

watch('./src/css/**/*.scss', series('styles'));
watch('./src/scripts/*.js', series('scripts'));

task('default', series('clean:css', 'clean:scripts', 'styles', 'scripts'));