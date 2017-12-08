let ExtractTextPlugin = require('extract-text-webpack-plugin')
let path = require('path')
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
            extensions: ['.js', '.jsx'],
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
                    query: {
                        presets: ['react', 'es2015', "stage-0"],
                        plugins: [
                            [
                                //转换新的api
                                "transform-runtime",
                                {
                                    //表示是否开启内联的babel helpers 在调用模块名字(moduleName)时将被替换名字。
                                    "helpers": false,
                                    //表示是否把内置的东西(Promise,Set,Map,tec)转换成非全局污染垫片。
                                    "polyfill": true,
                                    //是否开启generator函数转换成使用regenerator runtime来避免污染全局域。
                                    "regenerator": true
                                }
                            ],
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', {loader: 'css-loader'}, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }]
                },
                {
                    test: /\.(scss)$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {loader: 'css-loader', options: {module: true}},
                            'postcss-loader',
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.md$/,
                    loader: ['html-loader', 'markdown-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'img/[name]-[hash:8].[ext]'
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:7].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
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
            headers: { 'Access-Control-Allow-Origin': '*' },
            proxy: {
                '/api': {
                    target: options.apiUrl,
                    changeOrigin: true
                }
            }
        }
    }
}
