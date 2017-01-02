import React from 'react';

export default name => {
  const RealComponent = require(name);
  const realComponentName = RealComponent.name === 'Component' ? name : RealComponent.name;
  const componentName = (RealComponent.displayName || realComponentName || name).replace(/^(RCT|RK)/, '');

  const Component = class extends RealComponent {  // eslint-disable-line react/prefer-stateless-function
    render() {
      return React.createElement(
        componentName,
        this.props,
        this.props.children
      );
    }
  };

  Component.displayName = componentName;
  Component.name = componentName;

  return Component;
};
