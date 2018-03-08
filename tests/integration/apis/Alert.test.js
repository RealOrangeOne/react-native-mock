import { expect } from 'chai';


describe('Alert', () => {
  const { Alert } = require('react-native');

  it('should be callable', function () {
    const alert = Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => {}
        },
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {}
        }
      ],
      {
        cancelable: false
      }
    );
    expect(alert).to.be.undefined;
  });
});
