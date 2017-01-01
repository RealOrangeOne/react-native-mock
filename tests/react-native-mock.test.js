import { expect } from 'chai';

describe('React Native Mock', function () {
  it('shouldnt break when mocking', function () {
    expect(require('../src/react-native-mock')).to.be.ok;
  });

  it('Should allow requiring of react-native', function () {
    expect(require('react-native')).to.be.ok;
  });
});
