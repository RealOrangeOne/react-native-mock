
import React from 'react';
import createReactClass from 'create-react-class';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableNativeFeedback = createReactClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: React.PropTypes.object
  },
  statics: {
    SelectableBackground() {},
    SelectableBackgroundBorderless() {},
    Ripple(color, borderless) {}
  },
  render() {
    return null;
  }
});

module.exports = TouchableNativeFeedback;
