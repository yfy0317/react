let webpack= require('webpack');
let UglifyJSPlugin= require('uglifyjs-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin') ;
let  BundleAnalyzerPlugin =  require('webpack-bundle-analyzer');
let OpenBrowserPlugin = require('open-browser-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin');
let path = require('path')
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: 4 });
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
let util = require('./index')
let plugins= [
    new HtmlWebpackPlugin({
        chunks: [ 'main','vendor','webpack-runtime'],
        filename: 'index.html',            //生成的html的文件名
        template: path.resolve(__dirname, '../static/template.html'),       //依据的模板
        title: 'sx-webpack',
        inject: true,                      //注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中
        minify: {                          //压缩配置
            removeComments: true,          //删除html中的注释代码
            collapseWhitespace: true,      //删除html中的空白符
            removeAttributeQuotes: true    //删除html元素中属性的引号
        },
        favicon: path.resolve(__dirname, '../static/favicon.png'),
        chunksSortMode: 'dependency'       //按dependency的顺序引入
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',      // 需要注意的是，chunk的name不能相同！！！
        filename: 'assets/[name][chunkhash].js', // 由于runtime独立出去了，这里便可以使用[chunkhash]了
        minChunks: 4,
    }),
    /* 抽取出webpack的runtime代码，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
    new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'assets/vendor.[hash].js', // 注意runtime只能用[hash]
    }),
    new webpack.HotModuleReplacementPlugin(), //热更新插件
    new webpack.ProvidePlugin({$: "jquery", _: 'lodash'}),
]

let getProdPlugins = function() {
    plugins.push(new UglifyJSPlugin({compress:{warnings:false}})), //js文件压缩插件   不显示警告
    plugins.push(new CompressionPlugin({//压缩gzip
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8
    })),
    plugins.push(new OptimizeCSSPlugin())  //压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
    plugins.push(new webpack.HashedModuleIdsPlugin())
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }))
    plugins.push(new CleanWebpackPlugin('build',
        {
            root: path.resolve(__dirname, '..'),
            verbose: true,
            dry: false,
        }))
    return plugins
}
let getDevPlugins = function () {
    plugins.push(new OpenBrowserPlugin({url: 'http://'+ util.getIp  + ':3000/home'}))
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    }))
    // plugins.push(new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     manifest: require('./dll/vendor-manifest.json')
    // }))
    plugins.push(new HappyPack({
        id:"happybabel",
        loaders:['babel-loader'],
        threadPool:happyThreadPool,
        cache:true,
        verbose:true
    }))
    return plugins
}
module.exports={
    getProdPlugins,
    getDevPlugins
}
