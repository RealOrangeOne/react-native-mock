/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/View.js
 */
import React from 'react';
import createClass from 'create-react-class';
import ViewAccessibility from './ViewAccessibility';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import ViewPropTypes from '../propTypes/ViewPropTypes';

const { AccessibilityTraits, AccessibilityComponentTypes } = ViewAccessibility;

const forceTouchAvailable = false;

const statics = {
  AccessibilityComponentType: AccessibilityComponentTypes,
  AccessibilityTraits,
  /**
   * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
   * @platform ios
   */
  forceTouchAvailable,
};

const View = createClass({
  propTypes: ViewPropTypes,

  mixins: [NativeMethodsMixin],

  statics: {
    ...statics,
  },

  render() {
    return null;
  },
});

module.exports = View;
