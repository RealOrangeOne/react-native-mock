const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync('node_modules/react-native/package.json')).version;
