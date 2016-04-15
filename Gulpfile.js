/**
 * Gulp.js 构建文件
 * 
 * @author Pandao
 * @updateTime 2016-04-15
 */

var fs           = require("fs");
var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var header       = require('gulp-header');
var pkg          = require('./package.json');
var dateFormat   = require('dateformatter').format;
var bowerPath    = "./bower_components/";

pkg.today        = dateFormat;

var headerComment = ["/*", 
					" * <%= pkg.name %> v<%= pkg.version %>",
                    " *",
					" * @file        <%= fileName(file) %> ",
					" * @description <%= pkg.description %>",
					" * @license     MIT License",
					" * @author      <%= pkg.author %>",
					" * {@link       <%= pkg.homepage %>}",
					" * @updateTime  <%= pkg.today('Y-m-d') %>",
					" */", 
					"\r\n"].join("\r\n");

var headerCommentInline = "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.description %> | MIT License | By: <%= pkg.author %> | <%= pkg.homepage %> | <%=pkg.today('Y-m-d') %> */\n";

gulp.task("build", function(){
    var distPath = "dist";

    return gulp.src("src/*.js")
                .pipe(header(headerComment, {pkg : pkg, fileName : function(file) { 
                    var name = file.path.split(file.base);
                    return name[1].replace("\\", "").replace("/", "");
                }}))
                .pipe(gulp.dest(distPath))
                .pipe(rename({ suffix: ".min" }))
                .pipe(uglify())
                .pipe(gulp.dest(distPath))
                .pipe(header(headerCommentInline, {pkg : pkg, fileName : function(file) {
                    var name = file.path.split(file.base + "\\");
                    return name[1];
                }}))
                .pipe(gulp.dest(distPath))
                .pipe(notify({ message: "build task completed!" }));
});

gulp.task("watch", function() { 
	gulp.watch("src/**/*.js", ["build"]);
});

gulp.task("default", ["build"]);