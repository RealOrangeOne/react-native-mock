import { expect } from 'chai';

describe('ImageStore', () => {
  const { ImageStore } = require('react-native');

  it('should have right functions', function () {
    expect(ImageStore.hasImageForTag).to.be.a('function');
    expect(ImageStore.removeImageForTag).to.be.a('function');
    expect(ImageStore.addImageFromBase64).to.be.a('function');
    expect(ImageStore.getBase64ForTag).to.be.a('function');
  });
});
