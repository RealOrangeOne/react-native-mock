import createReactClass from 'create-react-class';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import PropTypes from 'prop-types';

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
