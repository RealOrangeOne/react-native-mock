import _ from 'underscore';
import mockery from 'mockery';
import sinon from 'sinon';


const mockNativeModules = {
  AlertManager: {
    alertWithArgs: sinon.spy()
  },
  AppState: {
    addEventListener: sinon.spy()
  },
  AsyncLocalStorage: {
    clear: sinon.spy(),
    getItem: sinon.spy(),
    removeItem: sinon.spy(),
    setItem: sinon.spy()
  },
  BuildInfo: {
    appVersion: '0',
    buildVersion: '0'
  },
  Clipboard: {
    setString: sinon.spy()
  },
  DataManager: {
    queryData: sinon.spy()
  },
  FacebookSDK: {
    login: sinon.spy(),
    logout: sinon.spy(),
    queryGraphPath: sinon.spy((path, method, params, callback) => callback())
  },
  FbRelayNativeAdapter: {
    updateCLC: sinon.spy()
  },
  GraphPhotoUpload: {
    upload: sinon.spy()
  },
  I18n: {
    translationsDictionary: JSON.stringify({
      'Good bye, {name}!|Bye message': '\u{00A1}Adi\u{00F3}s {name}!'
    })
  },
  ImageLoader: {
    getSize: sinon.spy((uri, success) => process.nextTick(() => success(320, 240))),
    prefetchImage: sinon.spy()
  },
  ImageViewManager: {
    getSize: sinon.spy((uri, success) => process.nextTick(() => success(320, 240))),
    prefetchImage: sinon.spy()
  },
  KeyboardObserver: {
    addListener: sinon.spy(),
    removeListeners: sinon.spy()
  },
  ModalFullscreenViewManager: {},
  Networking: {
    sendRequest: sinon.spy(),
    abortRequest: sinon.spy(),
    addListener: sinon.spy(),
    removeListeners: sinon.spy()
  },
  SourceCode: {
    scriptURL: null
  },
  StatusBarManager: {
    setColor: sinon.spy(),
    setStyle: sinon.spy(),
    setHidden: sinon.spy(),
    setNetworkActivityIndicatorVisible: sinon.spy(),
    setBackgroundColor: sinon.spy(),
    setTranslucent: sinon.spy()
  },
  Timing: {
    createTimer: sinon.spy(),
    deleteTimer: sinon.spy()
  },
  UIManager: {
    createView: sinon.spy(),
    removeRootView: sinon.spy(),
    setChildren: sinon.spy(),
    manageChildren: sinon.spy(),
    updateView: sinon.spy(),
    removeSubviewsFromContainerWithID: sinon.spy(),
    replaceExistingNonRootView: sinon.spy(),
    customBubblingEventTypes: {},
    customDirectEventTypes: {},
    Dimensions: {
      window: {
        fontScale: 2,
        height: 1334,
        scale: 2,
        width: 750
      }
    },
    ModalFullscreenView: {
      Constants: {}
    },
    ScrollView: {
      Constants: {}
    },
    View: {
      Constants: {}
    },
    AndroidDrawerLayout: {
      Constants: {
        DrawerPosition: {
          Right: 'RIGHT',
          Left: 'LEFT'
        }
      }
    }
  },
  WebSocketModule: {
    connect: sinon.spy(),
    send: sinon.spy(),
    sendBinary: sinon.spy(),
    ping: sinon.spy(),
    close: sinon.spy(),
    addListener: sinon.spy(),
    removeListeners: sinon.spy()
  },
  Platform: { // https://github.com/facebook/react-native/pull/11651
    OS: 'ios',
    Version: sinon.spy(() => ''),
    select: sinon.spy((obj) => obj.ios)
  }
};

_.forEach(Object.keys(mockNativeModules), function (mod) {
  mockery.registerMock(mod, mockNativeModules[mod]);
});

mockery.registerMock('NativeModules', mockNativeModules);

export default mockNativeModules;
