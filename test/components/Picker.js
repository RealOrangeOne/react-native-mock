import { expect } from 'chai';
import Picker from '../../src/components/Picker.js';

describe('Picker', () => {
  it('is renderable', () => {
    expect(Picker).to.be.a('function');
  });

  it('.Item is renderable', () => {
    expect(Picker.Item).to.be.a('function');
  });
});
