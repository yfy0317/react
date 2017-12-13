var os = require('os')

function getIp () {
    var interfaces = os.networkInterfaces()
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2]
            if (address.family === 'IPv4' && !address.internal) {
                return address.address
            }
        }
    }
    return '127.0.0.1'
}
module.exports = {
    getIp: getIp()
}