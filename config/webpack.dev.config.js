const Plugins = require('./Webpack.plugins.config')
const config = require('./index')
module.exports = [require('../webpack.config.common')({
    devTool: 'eval-source-map',
    dropConsole: false,
    publicPath: '/',
    plugins: Plugins.getDevPlugins(),
    bundleHash: false,
})]