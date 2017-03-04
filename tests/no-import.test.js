import { expect } from 'chai';
import path from 'path';


describe('React-Native-Mock import', function () {
  it('should throw', function () {
    expect(() => require('../src/no-import')).to.throw;
  });

  it('should happen when requiring react-native-mock', function () {
    const main = require('../package.json').main;
    expect(() => require(path.join('..', main))).to.throw;
  });
});
