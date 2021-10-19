const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

//compile scss into css

function style() {
  //1.scss Dir
  return (
    gulp
      .src("./scss/**/*.scss")
      //2.pass the file through the sass compiler
      .pipe(sass().on("error", sass.logError))
      //3.css location
      .pipe(gulp.dest("./css"))
      //4. stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
