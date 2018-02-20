import PropTypes from 'prop-types';
import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import createReactClass from 'create-react-class';

const TouchableNativeFeedback = createReactClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: PropTypes.object
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