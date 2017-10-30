import React from 'react';
import createMockComponent from './createMockComponent';
import PropTypes from 'prop-types';

class TabBarIOS extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  static Item = createMockComponent('TabBarIOS.Item');
  render() {
    return null;
  }
}

module.exports = TabBarIOS;
