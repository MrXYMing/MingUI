const glob = require("glob")
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntry() {
    let globPath = 'example/**/*.html'
    //let globPath = 'src/**/html/*.html'
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    //let pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)html'
    let files = glob.sync(globPath)
    let dirname, entries = []
    for (let i = 0; i < files.length; i++) {
        dirname = path.dirname(files[i]);
        entries.push(dirname);
        //entries.push(dirname.replace(new RegExp('^' + pathDir), '$2'))
    }
    return entries
}

getEntry().forEach(pathname => {
    let conf = {
        //filename: path.join(pathname, pathname) + '.html',
        filename: pathname + '.html',
        template: path.join(__dirname, pathname, 'index.html'),
        minify: { //压缩HTML文件    
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        },
        chunks:[pathname],
    }
    common.plugins.push(new HtmlWebpackPlugin(conf))
});

function addEntry() {
    let entryObj = {}
    getEntry().forEach(item => {
        entryObj[item] = path.resolve(__dirname, item, 'index.js')
    });
    return entryObj
}

module.exports = merge(common, {
    mode: 'development',
    entry: addEntry(),
    //entry: path.resolve(__dirname, "./example/button/index.js"),
    // entry: {
    //     index: './example/button/index.js',
    //     index2: './example/button2/index.js'
    // },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
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
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: './example/button/index.html',
    //         minify: { //压缩HTML文件    
    //             removeComments: true, //移除HTML中的注释
    //             collapseWhitespace: false //删除空白符与换行符
    //         },
    //         chunks:['index']
    //         //title: 'styleSheets'
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'index2.html',
    //         template: './example/button2/index.html',
    //         minify: { //压缩HTML文件    
    //             removeComments: true, //移除HTML中的注释
    //             collapseWhitespace: false //删除空白符与换行符
    //         },
    //         chunks:['index2']
    //         //title: 'styleSheets'
    //     })
    // ]
});