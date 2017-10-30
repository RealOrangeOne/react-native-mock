/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Text/Text.js
 */
import React from 'react';
import styleSheetPropType from '../propTypes/StyleSheetPropType';
import TextStylePropTypes from '../propTypes/TextStylePropTypes';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import reactMixin from 'react-mixin';
import PropTypes from 'prop-types';

const stylePropType = styleSheetPropType(TextStylePropTypes);

class Text extends React.Component {
  static propTypes = {
    /**
     * Used to truncate the text with an ellipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     */
    numberOfLines: PropTypes.number,
    /**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
    onLayout: PropTypes.func,
    /**
     * This function is called on press.
     */
    onPress: PropTypes.func,
    /**
     * When true, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     * @platform ios
     */
    suppressHighlighting: PropTypes.bool,
    style: stylePropType,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: PropTypes.string,
    /**
     * Specifies should fonts scale to respect Text Size accessibility setting on iOS.
     * @platform ios
     */
    allowFontScaling: PropTypes.bool,
  };

  render() {
    return null;
  }
}

reactMixin(Text.prototype, NativeMethodsMixin);

module.exports = Text;
