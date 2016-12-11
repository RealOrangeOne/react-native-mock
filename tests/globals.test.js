import { expect } from 'chai';


describe('Globals', function () {
  it('should have promise globally', function () {
    expect(global.Promise).to.deep.equal(require('promise'));
  });

  it('should have promise globally', function () {
    expect(global.regeneratorRuntime).to.deep.equal(require('regenerator-runtime/runtime'));
  });

  it('should be in dev', function () {
    expect(global.__DEV__).to.be.true;
  });
});
