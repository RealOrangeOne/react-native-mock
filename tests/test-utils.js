import { expect } from 'chai';
import sinon from 'sinon';
import semver from 'semver';

export const buildComponentHTML = (componentName) => `<${componentName}></${componentName}>`;

export const expectSpy = function isSpy(spy) {
  expect(spy).to.contain.all.keys(
    Object.keys(sinon.spy())
  );
  expect(spy.id).to.contain('spy');
  expect(spy.callCount).to.be.a('number');
  expect(spy.called).to.be.a('boolean');
  expect(spy.notCalled).to.be.a('boolean');
};

export const reactNativeVersion = semver.minor(require('../src/react-native-version')) / 100;
