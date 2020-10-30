const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
// const uglify = require('gulp-gulify');
// const pipeline = require('readable-stream').pipeline;

//compile scss into css
function style() {
  return (
    //where is scss file?
    gulp
      .src("./scss/*.scss")
      //pass file through the sass compiler
      .pipe(sass())
      //where do I save the compiled css
      .pipe(gulp.dest("./css"))
      //stream changes to all browserSync
      .pipe(browserSync.stream())
  );
}

function watch() {
  //Initialize the browserSync with a server object with baseDir and index props
  browserSync.init({
    server: {
      baseDir: "/Users/alankassis/documents/atom/hydrospark_dev",
      index: "hydrospark_projects_page.html"
    }
  });
  // Tell it what to watch
  gulp.watch("/Users/alankassis/documents/atom/hydrospark_dev/**/*.scss", style);
  // Tell it to reload
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  // gulp.watch("./**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
