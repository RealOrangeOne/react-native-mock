import React from 'react';
import createMockComponent from './createMockComponent';
import createReactClass from 'create-react-class';

const TabBarIOS = createReactClass({
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
