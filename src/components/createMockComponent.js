import React from 'react';
import createClass from 'create-react-class';

function createMockComponent(displayName) {
  return createClass({
    displayName,
    render() {
      return null;
    },
  });
}

module.exports = createMockComponent;
