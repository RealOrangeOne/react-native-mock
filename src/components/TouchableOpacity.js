/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import PropTypes from 'prop-types';

class TouchableOpacity extends React.Component {
  static propTypes = {
    ...TouchableWithoutFeedback.propTypes,
    /**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
    activeOpacity: PropTypes.number,
  };

  render() {
    return null;
  }
}

module.exports = TouchableOpacity;
