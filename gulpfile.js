const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const del = require('del');

gulp.task("css",function(done){
    console.log("minifying css....");
    gulp.src("./assets/**/*.css")
    .pipe(cssnano())
    .pipe(gulp.dest('./assets'))
    done()
});

gulp.task('js', function(done){
    console.log('minifying js...');
     gulp.src('./assets/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assets'))
    .pipe(gulp.src('./assets/**/*.js'))
 
    done()
});


gulp.task('images', function(done){
    console.log('compressing images...');
    gulp.src('./assets/**/*.+(png|jpg|mp4|ico|jpeg)')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets'))
   
    done();
});

// gulp.task('clean:assets', function(done){
//     del.sync('./public/assets');
//     done();
// });

gulp.task('build', gulp.series('js','css','images'), function(done){
    console.log('Building assets');
    done();
});