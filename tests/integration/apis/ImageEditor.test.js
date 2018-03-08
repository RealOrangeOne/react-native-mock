import { expect } from 'chai';


describe('ImageEditor', () => {
  const { ImageEditor } = require('react-native');

  it('should have right functions', function () {
    expect(ImageEditor.cropImage).to.be.a('function');
  });
});
