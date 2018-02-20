import PropTypes from 'prop-types';
import React from 'react';
import createMockComponent from './createMockComponent';
import createReactClass from 'create-react-class';

const Picker = createReactClass({
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