
const NativeModules = {
  Timing: require('./Timing'),
  UIManager: require('./UIManager'),
  AsyncLocalStorage: require('../../api/AsyncStorage'),
  SourceCode: require('./SourceCode'),
  AlertManager: require('./AlertManager'),
  Clipboard: require('./Clipboard'),
  CameraRollManager: require('./CameraRollManager'),
  TestModule: require('./TestModule'),
  WebViewManager: require('./WebViewManager'),
  ScrollViewManager: require('./ScrollViewManager'),
  ActionSheetManager: require('./ActionSheetManager'),
  AppState: require('./AppState'),
  ImagePickerIOS: require('./ImagePickerIOS'),
  DeviceEventManager: require('./DeviceEventManager'),
  DatePickerAndroid: require('./DatePickerAndroid'),
};

module.exports = NativeModules;
