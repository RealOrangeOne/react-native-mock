/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/StatusBar/StatusBar.js
 */
import React from 'react';
import ColorPropType from '../propTypes/ColorPropType';
import PropTypes from 'prop-types';

let _backgroundColor = '';
let _barStyle = {};
let _hidden = false;
let _networkActivityIndicatorVisible = false;
let _translucent = false;

class StatusBar extends React.Component {
  static propTypes = {
    animated: PropTypes.bool,
    barStyle: PropTypes.oneOf(['default', 'light-content']),
    backgroundColor: ColorPropType,
    hidden: PropTypes.bool,
    networkActivityIndicatorVisible: PropTypes.bool,
    showHideTransition: PropTypes.oneOf(['fade', 'slide']),
    translucent: PropTypes.bool
  };

  static setBackgroundColor(backgroundColor, animated) {
    _backgroundColor = backgroundColor;
  }

  static setBarStyle(barStyle, animated) {
    _barStyle = barStyle;
  }

  static setHidden(hidden, animated) {
    _hidden = hidden;
  }

  static setNetworkActivityIndicatorVisible(visible) {
    _networkActivityIndicatorVisible = visible;
  }

  static setTranslucent(translucent) {
    _translucent = translucent;
  }

  static __getBackgroundColor() {
    return _backgroundColor;
  }

  static __getBarStyle() {
    return _barStyle;
  }

  static __getHidden() {
    return _hidden;
  }

  static __getNetworkActivityIndicatorVisible() {
    return _networkActivityIndicatorVisible;
  }

  static __getTranslucent() {
    return _translucent;
  }

  render() {
    return null;
  }
}

module.exports = StatusBar;
