/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/EdgeInsetsPropType.js
 */
import PropTypes from 'prop-types';

import React from 'react';

const EdgeInsetsPropType = PropTypes.shape({
  top: PropTypes.number,
  left: PropTypes.number,
  bottom: PropTypes.number,
  right: PropTypes.number,
});

module.exports = EdgeInsetsPropType;