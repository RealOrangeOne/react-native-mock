/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/View.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import styleSheetPropType from '../propTypes/StyleSheetPropType';
import ViewStylePropTypes from '../propTypes/ViewStylePropTypes';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import ViewPropTypes from '../propTypes/ViewPropTypes';
import ViewAccessibility from './ViewAccessibility';

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

const View = React.createClass({
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
