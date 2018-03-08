import { expect } from 'chai';

describe('React Native Mock', function () {
  it('Should allow requiring of react-native', function () {
    expect(require('react-native')).to.be.ok;
  });
});
