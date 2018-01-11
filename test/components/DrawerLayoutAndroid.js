/* eslint no-unused-expressions: 0 */
import React from 'react';
import { DrawerLayoutAndroid } from '../../src/react-native';
import { expect } from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('DrawerLayoutAndroid', () => {
  it('should render an empty DrawerLayoutAndroid', () => {
    const renderer = new ShallowRenderer(<DrawerLayoutAndroid renderNavigationView={() => {}} />);
    const wrapper = renderer.getRenderOutput();
    expect(wrapper).to.be.null;
  });

  it('should have static properties for the positions', () => {
    expect(DrawerLayoutAndroid.positions).to.be.an.object;
    expect(DrawerLayoutAndroid.positions).to.have.property('Left');
    expect(DrawerLayoutAndroid.positions).to.have.property('Right');
  });
});
