import _ from 'underscore';
import mockery from 'mockery';


const mockNativeModules = {
  AlertManager: {
    alertWithArgs: _.noop,
  },
  AppState: {
    addEventListener: _.noop,
  },
  AsyncLocalStorage: {
    clear: _.noop,
    getItem: _.noop,
    removeItem: _.noop,
    setItem: _.noop,
  },
  BuildInfo: {
    appVersion: '0',
    buildVersion: '0',
  },
  Clipboard: {
    setString: _.noop,
  },
  DataManager: {
    queryData: _.noop,
  },
  FacebookSDK: {
    login: _.noop,
    logout: _.noop,
    queryGraphPath: (path, method, params, callback) => callback(),
  },
  FbRelayNativeAdapter: {
    updateCLC: _.noop,
  },
  GraphPhotoUpload: {
    upload: _.noop,
  },
  I18n: {
    translationsDictionary: JSON.stringify({
      'Good bye, {name}!|Bye message': '\u{00A1}Adi\u{00F3}s {name}!',
    }),
  },
  ImageLoader: {
    getSize: (uri, success) => process.nextTick(() => success(320, 240)
    ),
    prefetchImage: _.noop,
  },
  ImageViewManager: {
    getSize: (uri, success) => process.nextTick(() => success(320, 240)
    ),
    prefetchImage: _.noop,
  },
  KeyboardObserver: {
    addListener: _.noop,
    removeListeners: _.noop,
  },
  ModalFullscreenViewManager: {},
  Networking: {
    sendRequest: _.noop,
    abortRequest: _.noop,
    addListener: _.noop,
    removeListeners: _.noop,
  },
  SourceCode: {
    scriptURL: null,
  },
  StatusBarManager: {
    setStyle: _.noop,
    setHidden: _.noop,
    setNetworkActivityIndicatorVisible: _.noop,
    setBackgroundColor: _.noop,
    setTranslucent: _.noop,
  },
  Timing: {
    createTimer: _.noop,
    deleteTimer: _.noop,
  },
  UIManager: {
    customBubblingEventTypes: {},
    customDirectEventTypes: {},
    Dimensions: {
      window: {
        fontScale: 2,
        height: 1334,
        scale: 2,
        width: 750,
      },
    },
    ModalFullscreenView: {
      Constants: {},
    },
    ScrollView: {
      Constants: {},
    },
    View: {
      Constants: {},
    },
  },
  WebSocketModule: {
    connect: _.noop,
    send: _.noop,
    sendBinary: _.noop,
    ping: _.noop,
    close: _.noop,
    addListener: _.noop,
    removeListeners: _.noop,
  },
};

_.forEach(Object.keys(mockNativeModules), function (mod) {
  mockery.registerMock(mod, mockNativeModules[mod]);
});

mockery.registerMock('NativeModules', mockNativeModules);
