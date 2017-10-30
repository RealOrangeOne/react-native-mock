import React from 'react';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import PropTypes from 'prop-types';

class TouchableNativeFeedback extends React.Component {
  static propTypes = {
    ...TouchableWithoutFeedback.propTypes,
    background: PropTypes.object
  };
  static SelectableBackground() {}
  static SelectableBackgroundBorderless() {}
  static Ripple(color, borderless) {}
  render() {
    return null;
  }
}

module.exports = TouchableNativeFeedback;
