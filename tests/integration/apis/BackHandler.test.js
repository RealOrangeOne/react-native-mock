import { expect } from 'chai';

describe('BackHandler', () => {
  const { BackHandler } = require('react-native');

  it('should bind events', function () {
    expect(BackHandler.addEventListener).to.be.a('function');
    expect(BackHandler.removeEventListener).to.be.a('function');
    expect(BackHandler.exitApp).to.be.a('function');
  });
});
