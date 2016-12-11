import { expect } from 'chai';
import NativeModules from '../src/NativeModules';

describe('Native Modules', function () {
  it('Should be defined', function () {
    expect(require('NativeModules')).to.deep.equal(NativeModules);  // eslint-disable-line import/no-unresolved
    expect(NativeModules).to.be.an('object');
  });

  describe('Single Modules', function () {
    Object.keys(NativeModules).forEach(function (mod) {
      it('should require ' + mod, function () {
        expect(require(mod)).to.deep.equal(NativeModules[mod]);
        expect(require(mod)).to.be.an('object');
      });
    });
  });
});
