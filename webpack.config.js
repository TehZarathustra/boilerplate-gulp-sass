var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './app/components/index/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'app/dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'title',
			template: './app/components/index/index.ejs',
			filename: './index.html',
			favicon: './app/components/index/favicon.ico'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'app/dist'),
	},
	module: {
		rules: [
			{
				test: /\.(css|sass)$/,
				use: [
					'style-loader',
					{loader: 'css-loader', options: { importLoaders: 1 }},
					{loader: 'postcss-loader', options: {
						plugins: function (loader) {
							return [
								require('postcss-import')({ root: loader.resourcePath }),
								require('postcss-cssnext')(),
								require('autoprefixer')(),
								require('cssnano')()
							]
						}
					}},
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};
