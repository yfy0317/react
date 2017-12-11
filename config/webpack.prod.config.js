var plugins = require('./webpack.plugins.config')

module.exports = [
    require('../webpack.config.common')({
        devTool: 'false',
        dropConsole: true,
        publicPath: '/',
        bundleHash: true,
        plugins: plugins.getProdPlugins(),
    })
]