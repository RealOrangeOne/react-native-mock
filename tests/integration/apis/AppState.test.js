import { expect } from 'chai';


describe('AppState', () => {
  const { AppState } = require('react-native');

  it('should allow event binds', function () {
    expect(AppState.addEventListener).to.be.a('function');
    expect(AppState.removeEventListener).to.be.a('function');
  });
});
