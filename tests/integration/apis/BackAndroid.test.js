import { expect } from 'chai';
import sinon from 'sinon';

describe('BackAndroid', () => {
  const { BackAndroid } = require('react-native');

  it('should bind events', function () {
    expect(BackAndroid.addEventListener).to.be.a('function');
    expect(BackAndroid.addEventListener().remove).to.be.a('function');
    expect(BackAndroid.removeEventListener).to.be.a('function');
    expect(BackAndroid.exitApp).to.be.a('function');
  });

  it('should remove', function () {
    sinon.stub(BackAndroid, 'removeEventListener');
    BackAndroid.addEventListener().remove();
    expect(BackAndroid.removeEventListener).to.have.been.calledOnce;
    BackAndroid.removeEventListener.restore();
  });
});
