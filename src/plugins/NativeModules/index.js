
const NativeModules = {
  Timing: require('./Timing'),
  UIManager: require('./UIManager'),
  AsyncLocalStorage: require('../../api/AsyncStorage'),
  SourceCode: require('./SourceCode'),
  AlertManager: require('./AlertManager'),
  Clipboard: require('./Clipboard'),
  CameraRollManager: require('./CameraRollManager'),
  TestModule: require('./TestModule'),
};

module.exports = NativeModules;
