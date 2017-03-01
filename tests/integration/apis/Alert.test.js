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
          onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        },
      ],
      {
        cancelable: false
      }
    );
    expect(alert).to.be.undefined;
  });
});
