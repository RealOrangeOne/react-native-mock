import React from 'react';
import createClass from 'create-react-class';
import createMockComponent from './createMockComponent';

const TabBarIOS = createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  statics: {
    Item: createMockComponent('TabBarIOS.Item')
  },
  render() {
    return null;
  }
});

module.exports = TabBarIOS;
