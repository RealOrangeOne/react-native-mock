/* eslint-disable no-var */

var fs = require('fs');
var glob = require('glob');
var path = require('path');
var _ = require('underscore');
var perfy = require('perfy');

var providesRegex = /\r?\n \* @providesModule (\S+)(?=\r?\n)/;
var validName = /^[a-z0-9-_].+$/i;
var iosTest = /ios/gi;
var androidTest = /android/gi;
var CWD = process.cwd();
var PROJECT_ROOT = path.join(CWD, '..', '..');
var PROJECT_NODE_MODULES = path.join(PROJECT_ROOT, 'node_modules');
var TIMER = 'time';

if (!fs.existsSync(PROJECT_NODE_MODULES)) {
  PROJECT_NODE_MODULES = path.join(CWD, 'node_modules');  // For tests
}

perfy.start(TIMER);

var data = {
  hasteMap: {},
  version: require('./react-native-version')
};

var files = glob.sync(path.join(PROJECT_NODE_MODULES, '**/*.js'));

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
    data.hasteMap[component] = file.replace(PROJECT_NODE_MODULES + '/', '');
  }
});

fs.writeFileSync(path.join(CWD, 'haste-map.json'), JSON.stringify(data, null, 2));

var results = perfy.end(TIMER);

if (process.env.NODE_ENV !== 'test') {
  console.log(results.summary);  // eslint-disable-line no-console
}
