/**
 * Created by jerry on 2018/11/27.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 自动生成index.html文件，所有的 bundle 会自动添加到 html 中。

function resolve (dir) {
	return path.join(__dirname, '..', dir);
}
module.exports = {
	mode   : 'production',
	entry : {
		app   : path.resolve(__dirname, 'src/index.js'),
		home : path.resolve(__dirname, 'src/home.js')
	},
	output : {
		// webpack 如何输出结果的相关选项
		path     : path.resolve(__dirname, 'dist'), // string
		// 根据entry中入口的js，输出对应的文件名称
		filename: '[name].bundle.js'
	},
	plugins : [
		new HtmlWebpackPlugin({
			title : 'Output Management'
		})
	],
	module : {
		rules : [
			// 配置js/jsx语法解析
			{   test    : /\.js|jsx$/,
				loaders : 'babel-loader',
				exclude : /node_modules/
			},{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},{
				test: /\.less$/,
				loaders: ['style-loader', 'css-loader', 'less-loader']
			},{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 300
				}
			},
		]
	},
	// webpack热部署的另一种启动方式, 配合package中的start-dev命令一起使用, 访问目录是dis文件夹
	devServer : {
		contentBase : './dist'
	}
}