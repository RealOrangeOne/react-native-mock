import ColorPropType from './ColorPropType';
import PropTypes from 'prop-types';

const ShadowPropTypesIOS = {
  /**
   * Sets the drop shadow color
   * @platform ios
   */
  shadowColor: ColorPropType,
  /**
   * Sets the drop shadow offset
   * @platform ios
   */
  shadowOffset: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  /**
   * Sets the drop shadow opacity (multiplied by the color's alpha component)
   * @platform ios
   */
  shadowOpacity: PropTypes.number,
  /**
   * Sets the drop shadow blur radius
   * @platform ios
   */
  shadowRadius: PropTypes.number,
};

module.exports = ShadowPropTypesIOS;
