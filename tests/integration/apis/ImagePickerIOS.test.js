import { expect } from 'chai';


describe('ImagePickerIOS', () => {
  const { ImagePickerIOS } = require('react-native');

  it('should have right functions', function () {
    expect(ImagePickerIOS.canRecordVideos).to.be.a('function');
    expect(ImagePickerIOS.canUseCamera).to.be.a('function');
    expect(ImagePickerIOS.openCameraDialog).to.be.a('function');
    expect(ImagePickerIOS.openSelectDialog).to.be.a('function');
  });
});
