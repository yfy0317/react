var Plugins = require('./Webpack.plugins.config')
var config = require('config')
module.exports = [require('../webpack.config.common')({
    devTool: 'eval-source-map',
    dropConsole: false,
    publicPath: '/',
    plugins: Plugins.getDevPlugins(),
    apiUrl: config.apiUrl,
    bundleHash: false,
})]