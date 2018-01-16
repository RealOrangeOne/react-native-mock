import { expect } from 'chai';


describe('Dimensions', () => {
  const { Dimensions } = require('react-native');

  it('should get dimensions', function () {
    expect(Dimensions.get('window')).to.deep.equal({
      fontScale: 2,
      height: 667,
      scale: 2,
      width: 375
    });
  });

  it('should throw on invalid dimensions', function () {
    expect(() => Dimensions.get('notWindow')).to.throw;
  });
});
