import { expect } from 'chai';

describe('Keyboard', () => {
  const { Keyboard } = require('react-native');

  it('should bind events', function () {
    expect(Keyboard.addListener).to.be.a('function');
    expect(Keyboard.addListener().remove).to.be.a('function');
    expect(Keyboard.removeListener).to.be.a('function');
    expect(Keyboard.removeAllListeners).to.be.a('function');
    expect(Keyboard.dismiss).to.be.a('function');
  });
});
