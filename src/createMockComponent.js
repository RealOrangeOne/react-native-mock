import React from 'react';

export default name => {
  class Component extends React.Component {  // eslint-disable-line react/prefer-stateless-function
    render() {
      return React.createElement(
        name.replace(/^(RCT|RK)/, ''),
        this.props,
        this.props.children
      );
    }
  }
  Component.propTypes = {
    children: React.PropTypes.any
  };
  return Component;
};
