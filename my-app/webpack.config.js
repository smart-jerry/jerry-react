/**
 * Created by jerry on 2018/11/27.
 */
const path = require('path');
function resolve (dir) {
	return path.join(__dirname, '..', dir);
}
module.exports = {
	mode   : 'production',
	entry  : path.resolve(__dirname, 'src/index.js'),
	output : {
		// webpack 如何输出结果的相关选项
		path     : path.resolve(__dirname, 'dist'), // string
		filename : 'index.js'  // 打包后文件
	},
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
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 300
				}
			},
		]
	}
}