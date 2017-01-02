/* eslint-disable no-var */

var fs = require('fs');
var glob = require('glob');
var path = require('path');
var _ = require('underscore');

var providesRegex = /\r?\n \* @providesModule (\S+)(?=\r?\n)/;
var validName = /^[a-z0-9-_].+$/i;
var iosTest = /ios/gi;
var androidTest = /android/gi;
var CWD = process.cwd();

var data = {
  hasteMap: {},
  version: require('./react-native-version')
};

var files = glob.sync('node_modules/**/*.js');

_.forEach(files, function (file) {
  var matches = providesRegex.exec(fs.readFileSync(file).toString());
  if (matches && validName.test(matches[1])) {
    var component = matches[1];
    if (component.match(iosTest) && file.endsWith('.android.js')) {  // Dont add IOS components if they end in android.js
      return;
    }
    if (component.match(androidTest) && file.endsWith('.ios.js')) {  // Dont add Android components if they end in ios.js
      return;
    }
    data.hasteMap[component] = file.replace('node_modules/', '');
  }
});

fs.writeFileSync(path.join(CWD, 'haste-map.json'), JSON.stringify(data, null, 2));
