import { expect } from 'chai';
import semver from 'semver';


describe('React-Native version', function () {
  it('should return a version', function () {
    const version = require('../src/react-native-version');
    expect(version).to.be.a('string');
    expect(semver.valid(version)).to.equal(version);
  });

  it('should be a valid version', function () {
    const version = require('../src/react-native-version');
    const expectedVersion = require('../package').devDependencies['react-native'];
    expect(semver.valid(version)).to.equal(version);
    expect(semver.clean(version)).to.equal(version);
    expect(semver.satisfies(version, expectedVersion)).to.be.true;
  });
});
