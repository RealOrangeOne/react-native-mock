import { expect } from 'chai';


describe('Clipboard', () => {
  const { Clipboard } = require('react-native');

  it('should have proper functions', function () {
    expect(Clipboard.getString).to.be.a('function');
    expect(Clipboard.setString).to.be.a('function');
  });
});
