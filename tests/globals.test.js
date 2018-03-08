import { expect } from 'chai';
import defineGlobalProperty from '../src/defineGlobalProperty';


describe('Globals', function () {
  it('should have promise globally', function () {
    expect(global.Promise).to.deep.equal(require('promise'));
  });

  it('should have regenerator runtime globally', function () {
    expect(global.regeneratorRuntime).to.deep.equal(require('regenerator-runtime/runtime'));
  });

  it('should be in dev', function () {
    expect(global.__DEV__).to.be.true;
  });

  it('should have global navigator', function () {
    expect(global.navigator).to.exist;
    expect(global.navigator).to.have.any.keys('geolocation');
  });

  describe('describeGlobalProperty', function () {
    it('Should define property', function () {
      defineGlobalProperty('testKey1', 'testValue1');
      expect(global.testKey1).to.equal('testValue1');
    });
  });
});
