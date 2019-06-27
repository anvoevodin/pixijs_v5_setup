const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	devServer: {
		contentBase: 'dist',
		port: 3000
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'build',
			to: '.'
		}])
	]
}