/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/PointPropType.js
 */
import PropTypes from 'prop-types';

const PointPropType = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

module.exports = PointPropType;
