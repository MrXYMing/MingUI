const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: {
    //     index: './src/scripts/index.js'
    // },
    // output: {
    //     filename: 'main.js',
    //     //filename: '[name].[hash].js',
    //     //chunkFilename: '[name].[hash].js',
    //     path: path.resolve(__dirname, 'dist'),
    //     library: "style",
    //     libraryTarget: 'umd'
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images'
                        }
                    }

                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};