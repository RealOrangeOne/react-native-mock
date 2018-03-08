import { expect } from 'chai';


describe('CameraRoll', () => {
  const { CameraRoll } = require('react-native');

  it('should have proper functions', function () {
    expect(CameraRoll.saveImageWithTag).to.be.a('function');
    expect(CameraRoll.saveToCameraRoll).to.be.a('function');
    expect(CameraRoll.getPhotos).to.be.a('function');
  });
});
