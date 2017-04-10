import React from 'react';
import PropTypes from 'prop-types';
import createMockComponent from './createMockComponent';

const TabBarIOS = React.createClass({
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
