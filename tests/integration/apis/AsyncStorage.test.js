import { expect } from 'chai';
import MockAsyncStorage from '../../../src/mocks/AsyncStorage';


describe('AsyncStorage', () => {
  const { AsyncStorage } = require('react-native');

  beforeEach(function (done) {
    AsyncStorage.clear(done);
  });

  it('should be the mock', function () {
    expect(AsyncStorage).to.deep.equal(MockAsyncStorage);
  });

  it('should have right functions', function () {
    expect(AsyncStorage.setItem).to.be.a('function');
    expect(AsyncStorage.getItem).to.be.a('function');
    expect(AsyncStorage.clear).to.be.a('function');
  });

  it('should set and get', function (done) {
    AsyncStorage.setItem('key', 'value').then(function () {
      expect(AsyncStorage.getItem('key')).to.eventually.equal('value').notify(done);
    });
  });

  it('should get invalid key', function (done) {
    expect(AsyncStorage.getItem('key')).to.be.rejected.notify(done);
  });
});
