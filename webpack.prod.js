const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        index: './src/scripts/index.js'
    },
    output: {
        filename: 'main.js',
        //filename: '[name].[hash].js',
        //chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: "M",
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
                /* use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                }
                ) */
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        /* new HtmlWebpackPlugin({
            filename: 'demo/index.html',
            template: './demo/index.html',
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
            //title: 'styleSheets'
        }),
        new HtmlWebpackPlugin({
            filename: 'demo/index2.html',
            template: './demo/index2.html',
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
            //title: 'styleSheets'
        }), */
        new ExtractTextPlugin({
            filename: 'main.css', //路径以及命名
            //filename: '[name].[hash].css', //路径以及命名
        })
    ]
});