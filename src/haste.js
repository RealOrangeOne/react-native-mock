import glob from 'glob';
import path from 'path'
import fs from 'fs'

const providesRegex = /\r?\n \* @providesModule (\S+)(?=\r?\n)/;
const validName = /^[a-z0-9-_].+$/i;
const CWD = process.cwd();

const data = {
  hasteMap: {},
  version: require('./react-native-version')
};

const files = glob.sync('node_modules/**/*.js');

files.forEach(function (file) {
  const matches = providesRegex.exec(fs.readFileSync(file).toString());
  if (matches && validName.test(matches[1])) {
    data.hasteMap[matches[1]] = file.replace(CWD, '');
  }
});

fs.writeFileSync(path.join(CWD, 'haste-map.json'), JSON.stringify(data, null, 2));
