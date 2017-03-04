import { expect } from 'chai';


describe('Geolocation', () => {
  const Geolocation = global.navigator.geolocation;

  it('should have right functions', function () {
    expect(Geolocation.getCurrentPosition).to.be.a('function');
    expect(Geolocation.watchPosition).to.be.a('function');
    expect(Geolocation.clearWatch).to.be.a('function');
    expect(Geolocation.stopObserving).to.be.a('function');
  });
});
