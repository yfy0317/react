let ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = function (options) {
    return {
        devtool: options.devTool, // 配置生成Source Maps，选择合适的选项
        entry: {
            main: __dirname +'/reactApp.jsx',
            vendor: [
                'react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'lodash'
            ]
        } ,
        resolve: {
            extensions: ['.js', '.jsx', '.png', '.scss'],
        },
        output: {
            path: __dirname + '/build/', // eslint-disable-line // 打包后的文件存放的地方
            filename: options.bundleHash ? 'assets/bundle-[hash].js' : 'bundle.js',
            chunkFilename: 'assets/chunk-[id]-[chunkhash].js',
            publicPath: options.publicPath
        },
        module: {// 在配置文件里添加JSON loader
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(jsx|js)?$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules|bower_components)/,
                    options: {
                        presets: ['react', 'env', "stage-0"],
                        plugins: [
                            [
                                "transform-runtime", {  "helpers": false, "polyfill": true, "regenerator": true }
                            ],
                            [
                                "import", {   "libraryName": "antd-mobile" }
                            ],
                            "transform-decorators-legacy",
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    use: [ "style-loader", 'postcss-loader']
                },
                {
                    test: /\.(scss)$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            "css-loader?modules&localIdentName=[name]-[local]",
                            'postcss-loader',
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.html$/, loader: 'html-loader'
                },
                {
                    test: /\.md$/, loader: ['html-loader', 'markdown-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'img/[name]-[hash:8].[ext]'
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:7].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            ]
        },
        plugins: options.plugins,
        devServer: {
            historyApiFallback: true, // 不跳转
            inline: true,
            stats: {
                cached: false,
                exclude: [
                    /node_modules[\\/]react(-router)?[\\/]/,
                    /node_modules[\\/]items-store[\\/]/
                ]
            },
            proxy: {
                '/api': {
                    target: options.apiUrl,
                    changeOrigin: true
                }
            }
        }
    }
}
