const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        lib: './src/lib.js'
    },
    output: {
        publicPath: 'dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Vue: 'vue'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=images/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=fonts/[name].[ext]'
                ]
            }
        ]
    }
}