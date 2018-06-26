const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./template/index1.html',
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
            //title: 'styleSheets'
        })
    ]
});