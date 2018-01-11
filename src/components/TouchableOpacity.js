/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';
import createReactClass from 'create-react-class';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableOpacity = createReactClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    /**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
    activeOpacity: React.PropTypes.number,
  },

  render() {
    return null;
  },
});

module.exports = TouchableOpacity;
