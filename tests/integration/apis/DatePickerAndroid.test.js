import { expect } from 'chai';


describe('DatePickerAndroid', () => {
  const { DatePickerAndroid } = require('react-native');

  it('should have proper functions', function () {
    expect(DatePickerAndroid.open).to.be.a('function');
    expect(DatePickerAndroid.dateSetAction).to.equal('dateSetAction');
    expect(DatePickerAndroid.dismissedAction).to.equal('dismissedAction');
  });
});
