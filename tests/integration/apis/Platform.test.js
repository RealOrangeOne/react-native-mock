import { expect } from 'chai';
import { assuming } from 'mocha-assume';
import { reactNativeVersion } from '../../test-utils';

describe('Platform', () => {
  const { Platform } = require('react-native');
  it('should have correct keys', function () {
    expect(Platform.OS).to.equal('ios');
    expect(Platform.Version).to.equal('10');
  });

  assuming(reactNativeVersion >= 0.41).it('should have tvOS check', function () {
    expect(Platform.isTVOS).to.be.false;
  });

  assuming(reactNativeVersion >= 0.42).it('should have testing check', function () {
    expect(Platform.isTesting).to.be.false;
  });

  assuming(reactNativeVersion >= 0.43).it('should have iPad check', function () {
    expect(Platform.isPad).to.be.true;
  });
});
