describe('React Native Mock', function () {
  it('shouldnt break when mocking', function () {
    require('../src/react-native-mock');
  });

  it('Should allow requiring of react-native', function () {
    require('react-native');
  });
});
