/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/StyleSheetPropType.js
 */
import flattenStyle from './flattenStyle';
import PropTypes from 'prop-types';

function StyleSheetPropType(shape) {
  const shapePropType = PropTypes.shape(shape);
  return function (props, propName, componentName, ...rest) {
    let newProps = props;
    if (props[propName]) {
      // Just make a dummy prop object with only the flattened style
      newProps = {};
      newProps[propName] = flattenStyle(props[propName]);
    }
    return shapePropType(newProps, propName, componentName, ...rest);
  };
}

module.exports = StyleSheetPropType;
