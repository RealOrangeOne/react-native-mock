import React from 'react';
import createMockComponent from './createMockComponent';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const TabBarIOS = createReactClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('TabBarIOS.Item')
  },
  render() {
    return null;
  }
});

module.exports = TabBarIOS;
