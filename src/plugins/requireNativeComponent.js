/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
import React from 'react';
import createClass from 'create-react-class';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return createClass({
    displayName: viewName,
    render() {
      return null;
    },
  });
}

module.exports = requireNativeComponent;
