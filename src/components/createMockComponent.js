import createReactClass from 'create-react-class';

function createMockComponent(displayName) {
  return createReactClass({
    displayName,
    render() {
      return null;
    },
  });
}

module.exports = createMockComponent;
