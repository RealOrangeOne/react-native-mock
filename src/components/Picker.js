import React from 'react';
import createClass from 'create-react-class';
import createMockComponent from './createMockComponent';

const Picker = createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return null;
  }
});

module.exports = Picker;
