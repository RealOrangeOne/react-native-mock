import React from 'react';
import PropTypes from 'prop-types';
import createMockComponent from './createMockComponent';

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
