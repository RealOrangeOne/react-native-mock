import React from 'react';
import createMockComponent from './createMockComponent';
import PropTypes from 'prop-types';

class Picker extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  static Item = createMockComponent('Picker.Item');
  render() {
    return null;
  }
}

module.exports = Picker;
