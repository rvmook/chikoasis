var gulp = require('gulp'),
	browserSync = require('../util/browserSync'),
	runSequence = require('run-sequence');

module.exports = function(taskName) {

	gulp.task(taskName, ['clean'], function (cb) {

		cb = cb || function (e) {
		};

		var args = ['styles', 'html', 'browserify', 'copyAssets'];

		if (!global.isProd) {

			browserSync.init({
				server: {
					baseDir: "./dist"
				}
			});
			args.push('watch');
		}

		args.push(cb);

		return runSequence.apply(this, args);
	});
};