/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import PropTypes from 'prop-types';

import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import createReactClass from 'create-react-class';

const TouchableOpacity = createReactClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    /**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
    activeOpacity: PropTypes.number,
  },

  render() {
    return null;
  },
});

module.exports = TouchableOpacity;