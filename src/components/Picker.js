import React from 'react';
import createMockComponent from './createMockComponent';
import PropTypes from 'prop-types';

const Picker = React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return null;
  }
});

module.exports = Picker;
