import React from 'react';

export default name => {
  const RealComponent = require(name);
  const realComponentName = RealComponent.name === 'Component' ? name : RealComponent.name
  const componentName = (RealComponent.displayName || realComponentName || name).replace(/^(RCT|RK)/, '');

  return class extends RealComponent {  // eslint-disable-line react/prefer-stateless-function
    static displayName = componentName;
    static name = componentName;

    render() {
      return React.createElement(
        componentName,
        this.props,
        this.props.children
      );
    }
  };
};
