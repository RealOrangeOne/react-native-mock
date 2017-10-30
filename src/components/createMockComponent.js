import React from 'react';

function createMockComponent(displayName) {
  return class extends React.Component {
    static displayName = displayName;
    render() {
      return null;
    }
  };
}

module.exports = createMockComponent;
