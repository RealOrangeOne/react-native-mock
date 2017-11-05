import { expect } from 'chai';

describe('BackAndroid', () => {
  const { BackAndroid } = require('react-native');

  it('should bind events', function () {
    expect(BackAndroid.addEventListener).to.be.a('function');
    expect(BackAndroid.removeEventListener).to.be.a('function');
    expect(BackAndroid.exitApp).to.be.a('function');
  });
});
