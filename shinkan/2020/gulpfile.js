var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var prettify = require('gulp-prettify');
var srcFiles = [
    'how_to_join_ssr',
    'index',
    'links',
    'ssr_activities',
    'ssr_equipment',
    'ssr_laboratory',
    'welcome_events',
    'introduce',
];
var templates = ['./src/templates/*.ejs'];
var sources = [];
for (var file of srcFiles) {
    sources.push([file] + templates);
}

gulp.task('ejs', function(done) {
    for (var filename of srcFiles) {
        gulp.src('./src/templates/layout.ejs')
            .pipe(rename(filename + '.html'))
            .pipe(ejs({ filename: filename }))
            .pipe(prettify((indent_with_tab = true)))
            .pipe(gulp.dest('./'));
    }
    done();
});

/*
var watchingFiles = [
    './src/*.ejs',
    './src/templates/*.ejs'
];
var watch = require('gulp-watch');
gulp.task("default", function(){
    watch(watchingFiles, function(e){ gulp.start("ejs") } );
});
*/
