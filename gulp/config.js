var	styles = {
		src: 'src/assets/styles/**/*.scss',
		dest: 'dist/assets/styles'
	},
	browserify = {
		entries: ['./src/assets/scripts/main.js'],
		bundleName: 'main.js',
		dest: 'dist/assets/scripts',
		sourcemap: true
	},
	uglify = {
		preserveComments: 'some',
		compress: {
			drop_console: true
		}
	},
	html = {
		src: './src/*.html',
		dest: './dist/',
		options: {
			removeComments:true,
			removeTagWhitespace:true,
			collapseWhitespace:true,
			removeOptionalTags:true
		}
	},
	copyAssets = {
		src:[
			'src/assets/**',
			'!src/assets/scripts/**',
			'!src/assets/styles/**'
		],
		dest:'dist/assets/'
	},
	clean = ['dist/**'];

exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.copyAssets = copyAssets;
exports.browserify = browserify;
exports.uglify = uglify;