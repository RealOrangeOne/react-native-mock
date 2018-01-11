/* eslint no-unused-expressions: 0 */
import React from 'react';
import { DrawerLayoutAndroid } from '../../src/react-native';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

describe('DrawerLayoutAndroid', () => {
  it('should render an empty DrawerLayoutAndroid', () => {
    const renderer = ReactTestUtils.createRenderer();
    const wrapper = renderer.getRenderOutput(<DrawerLayoutAndroid renderNavigationView={() => {}} />);
    expect(wrapper).to.be.null;
  });

  it('should have static properties for the positions', () => {
    expect(DrawerLayoutAndroid.positions).to.be.an.object;
    expect(DrawerLayoutAndroid.positions).to.have.property('Left');
    expect(DrawerLayoutAndroid.positions).to.have.property('Right');
  });
});
