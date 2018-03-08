import { expect } from 'chai';

describe('Linking', () => {
  const { Linking } = require('react-native');

  it('should have right functions', function () {
    expect(Linking.addListener).to.be.a('function');
    expect(Linking.removeEventListener).to.be.a('function');
    expect(Linking.openURL).to.be.a('function');
    expect(Linking.canOpenURL).to.be.a('function');
    expect(Linking.getInitialURL).to.be.a('function');
  });

  it('should be allowed to open url', function (done) {
    expect(Linking.canOpenURL('test')).to.eventually.equal(true).notify(done);
  });
});
