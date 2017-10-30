/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/View.js
 */
import React from 'react';
import ViewAccessibility from './ViewAccessibility';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import ViewPropTypes from '../propTypes/ViewPropTypes';
import reactMixin from 'react-mixin';

const { AccessibilityTraits, AccessibilityComponentTypes } = ViewAccessibility;

const forceTouchAvailable = false;

class View extends React.Component {
  static propTypes = ViewPropTypes;
  static AccessibilityComponentType: AccessibilityComponentTypes;
  static AccessibilityTraits = AccessibilityTraits;
  /**
   * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
   * @platform ios
   */
  static forceTouchAvailable = forceTouchAvailable;
  render() {
    return null;
  }
}

reactMixin(View.prototype, NativeMethodsMixin);

module.exports = View;
