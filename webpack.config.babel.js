import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {

    entry: path.resolve(__dirname, 'src/js'),

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|scss)/,
                loaders: ['css-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue'],

        alias: {
            '@scripts': path.resolve(__dirname, 'src/js'),
            '@styles': path.resolve(__dirname, 'src/scss'),
            '@': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'snaploss',
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]

}