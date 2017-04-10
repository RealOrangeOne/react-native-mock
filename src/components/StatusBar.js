/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/StatusBar/StatusBar.js
 */
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import ColorPropType from '../propTypes/ColorPropType';

let _backgroundColor = '';
let _barStyle = {};
let _hidden = false;
let _networkActivityIndicatorVisible = false;
let _translucent = false;

const StatusBar = createReactClass({
  propTypes: {
    animated: PropTypes.bool,
    barStyle: PropTypes.oneOf(['default', 'light-content']),
    backgroundColor: ColorPropType,
    hidden: PropTypes.bool,
    networkActivityIndicatorVisible: PropTypes.bool,
    showHideTransition: PropTypes.oneOf(['fade', 'slide']),
    translucent: PropTypes.bool
  },

  statics: {
    setBackgroundColor(backgroundColor, animated) {
      _backgroundColor = backgroundColor;
    },

    setBarStyle(barStyle, animated) {
      _barStyle = barStyle;
    },

    setHidden(hidden, animated) {
      _hidden = hidden;
    },

    setNetworkActivityIndicatorVisible(visible) {
      _networkActivityIndicatorVisible = visible;
    },

    setTranslucent(translucent) {
      _translucent = translucent;
    },

    __getBackgroundColor() {
      return _backgroundColor;
    },

    __getBarStyle() {
      return _barStyle;
    },

    __getHidden() {
      return _hidden;
    },

    __getNetworkActivityIndicatorVisible() {
      return _networkActivityIndicatorVisible;
    },

    __getTranslucent() {
      return _translucent;
    }
  },

  render() {
    return null;
  }
});

module.exports = StatusBar;
