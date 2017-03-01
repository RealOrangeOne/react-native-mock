import { expect } from 'chai';


describe('AppRegistry', () => {
  const { AppRegistry, View } = require('react-native');

  it('should have register component', function () {
    const component = AppRegistry.registerComponent('react-native-mock', () => View);
    expect(component).to.equal('react-native-mock');
  });

  it('should list app keys', function () {
    AppRegistry.registerComponent('react-native-mock', () => View);
    expect(AppRegistry.getAppKeys()).to.deep.equal(['react-native-mock']);
  });
});
