/* eslint-disable no-var */

var fs = require('fs');
var glob = require('glob');
var path = require('path');
var _ = require('underscore');

var providesRegex = /\r?\n \* @providesModule (\S+)(?=\r?\n)/;
var validName = /^[a-z0-9-_].+$/i;
var CWD = process.cwd();

var data = {
  hasteMap: {},
  version: require('./react-native-version')
};

var files = glob.sync('node_modules/**/*.js');

_.forEach(files, function (file) {
  var matches = providesRegex.exec(fs.readFileSync(file).toString());
  if (matches && validName.test(matches[1])) {
    data.hasteMap[matches[1]] = file.replace(CWD, '');
  }
});

fs.writeFileSync(path.join(CWD, 'haste-map.json'), JSON.stringify(data, null, 2));
