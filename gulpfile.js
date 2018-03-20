const gulp = require("gulp");
const ts = require("gulp-typescript");
const DATA_FILES = ["src/data/**/*" ]

const tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", () => {
    const tsResult = tsProject
        .src()
        .pipe(tsProject());
    
    return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("watch", ["scripts"], () => {
    gulp.watch("src/**/*.ts", ["scripts"]);
});

gulp.task("data", () => {
    return gulp
        .src(DATA_FILES)
        .pipe(gulp.dest("dist/data"));
});

gulp.task("build", ["scripts", "data"]);

gulp.task("default", ["watch", "data"]);