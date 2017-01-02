import { expect } from 'chai';


describe('Image Compiler', function () {
  it('should require a jpg image', function () {
    expect(require('foo.jpg')).to.deep.equal({ uri: 'foo.jpg' });  // eslint-disable-line import/no-unresolved
  });

  it('should require a jpeg image', function () {
    expect(require('foo.jpeg')).to.deep.equal({ uri: 'foo.jpeg' }); // eslint-disable-line import/no-unresolved
  });

  it('should require a png image', function () {
    expect(require('foo.png')).to.deep.equal({ uri: 'foo.png' }); // eslint-disable-line import/no-unresolved
  });

  it('shouldnt require non-image', function () {
    function throwRequire() {
      return require('foo.foo'); // eslint-disable-line import/no-unresolved
    }
    expect(throwRequire).to.throw(Error);
  });
});
