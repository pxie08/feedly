var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//telling webpack the root js file is
	entry: [
		'./src/app/index.js'
	],
	module: {
		loaders: [
			{
				test: /\.jsx|\.js/, 
				exclude: /node_modules/, 
				loader: "babel-loader"
			},
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loader: "css-loader!stylus-loader"
			}
		]
	},
	//prod code for browser to read
	output: {
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
	// used to export html5 file
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/assets/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
	devServer: {
		port: 3000
	}
}
