import React from 'react';

export default name => {
  const RealComponent = require(name);
  const componentName = (RealComponent.displayName || RealComponent.name || name).replace(/^(RCT|RK)/, '');
  class Component extends RealComponent {  // eslint-disable-line react/prefer-stateless-function
    render() {
      return React.createElement(
        componentName,
        this.props,
        this.props.children
      );
    }
  }
  return Component;
};
