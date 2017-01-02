import { expect } from 'chai';


describe('Image Compiler', function () {
  it('should require a jpg image', function () {
    expect(require('foo.jpg')).to.deep.equal({uri: 'foo.jpg'});
  });

  it('should require a jpeg image', function () {
    expect(require('foo.jpeg')).to.deep.equal({uri: 'foo.jpeg'});
  });

  it('should require a png image', function () {
    expect(require('foo.png')).to.deep.equal({uri: 'foo.png'});
  });

  it('shouldnt require non-image', function () {
    function throwRequire() {
      return require('foo.foo');
    }
    expect(throwRequire).to.throw(Error);
  });
});
