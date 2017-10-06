import React from 'react';
import createMockComponent from './createMockComponent';
import PropTypes from 'prop-types';

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
