import { expect } from 'chai';
import TabBarIOS from '../../src/components/TabBarIOS.js';

describe('TabBarIOS', () => {
  it('is renderable', () => {
    expect(TabBarIOS).to.be.a('function');
  });

  it('.Item is renderable', () => {
    expect(TabBarIOS.Item).to.be.a('function');
  });
});
