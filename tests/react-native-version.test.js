import { expect } from 'chai';


describe('React-Native version', function () {
  it('should return correct version', function () {
    const version = require('../src/react-native-version');
    expect(version).to.be.a('string');
  });
});
