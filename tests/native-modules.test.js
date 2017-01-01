import { expect } from 'chai';
import NativeModules from '../src/NativeModules';
import sinon from 'sinon';

describe('Native Modules', function () {
  it('Should be defined', function () {
    expect(require('NativeModules')).to.deep.equal(NativeModules);  // eslint-disable-line import/no-unresolved
    expect(NativeModules).to.be.an('object');
  });

  it('should be requirable', function () {
    Object.keys(NativeModules).forEach(function (mod) {
      expect(require(mod)).to.deep.equal(NativeModules[mod]);
    });
  });

  describe('Specific Modules', function () {
    describe('AlertManager', function () {
      it('should have alertWithArgs as spy', function () {
        expect(NativeModules.AlertManager.alertWithArgs).to.be.a('function');
        NativeModules.AlertManager.alertWithArgs();
        expect(NativeModules.AlertManager.alertWithArgs).to.have.been.calledOnce;
      });
    });

    describe('AppState', function () {
      it('should have addEventListener as spy', function () {
        expect(NativeModules.AppState.addEventListener).to.be.a('function');
        NativeModules.AppState.addEventListener();
        expect(NativeModules.AppState.addEventListener).to.have.been.calledOnce;
      });
    });

    describe('AsyncLocalStorage', function () {
      it('should have clear as spy', function () {
        expect(NativeModules.AsyncLocalStorage.clear).to.be.a('function');
        NativeModules.AsyncLocalStorage.clear();
        expect(NativeModules.AsyncLocalStorage.clear).to.have.been.calledOnce;
      });

      it('should have getItem as spy', function () {
        expect(NativeModules.AsyncLocalStorage.getItem).to.be.a('function');
        NativeModules.AsyncLocalStorage.getItem();
        expect(NativeModules.AsyncLocalStorage.getItem).to.have.been.calledOnce;
      });

      it('should have removeItem as spy', function () {
        expect(NativeModules.AsyncLocalStorage.removeItem).to.be.a('function');
        NativeModules.AsyncLocalStorage.removeItem();
        expect(NativeModules.AsyncLocalStorage.removeItem).to.have.been.calledOnce;
      });

      it('should have setItem as spy', function () {
        expect(NativeModules.AsyncLocalStorage.setItem).to.be.a('function');
        NativeModules.AsyncLocalStorage.setItem();
        expect(NativeModules.AsyncLocalStorage.setItem).to.have.been.calledOnce;
      });
    });

    describe('BuildInfo', function () {
      it('should have version keys', function () {
        expect(NativeModules.BuildInfo.appVersion).to.equal('0');
        expect(NativeModules.BuildInfo.buildVersion).to.equal('0');
      });
    });

    describe('Clipboard', function () {
      it('should have setString as spy', function () {
        expect(NativeModules.Clipboard.setString).to.be.a('function');
        NativeModules.Clipboard.setString();
        expect(NativeModules.Clipboard.setString).to.have.been.calledOnce;
      });
    });

    describe('DataManager', function () {
      it('should have queryData as spy', function () {
        expect(NativeModules.DataManager.queryData).to.be.a('function');
        NativeModules.DataManager.queryData();
        expect(NativeModules.DataManager.queryData).to.have.been.calledOnce;
      });
    });

    describe('FacebookSDK', function () {
      it('should have login as spy', function () {
        expect(NativeModules.FacebookSDK.login).to.be.a('function');
        NativeModules.FacebookSDK.login();
        expect(NativeModules.FacebookSDK.login).to.have.been.calledOnce;
      });

      it('should have logout as spy', function () {
        expect(NativeModules.FacebookSDK.logout).to.be.a('function');
        NativeModules.FacebookSDK.logout();
        expect(NativeModules.FacebookSDK.logout).to.have.been.calledOnce;
      });

      it('should have queryGraphPath as spy', function () {
        expect(NativeModules.FacebookSDK.queryGraphPath).to.be.a('function');
        const callback = sinon.spy()
        NativeModules.FacebookSDK.queryGraphPath('', '', '', callback);
        expect(NativeModules.FacebookSDK.queryGraphPath).to.have.been.calledOnce;
        expect(callback).to.have.been.calledOnce;
      });
    });

    describe('FbRelayNativeAdapter', function () {
      it('should have updateCLC as spy', function () {
        expect(NativeModules.FbRelayNativeAdapter.updateCLC).to.be.a('function');
        NativeModules.FbRelayNativeAdapter.updateCLC();
        expect(NativeModules.FbRelayNativeAdapter.updateCLC).to.have.been.calledOnce;
      });
    });

    describe('GraphPhotoUpload', function () {
      it('should have upload as spy', function () {
        expect(NativeModules.GraphPhotoUpload.upload).to.be.a('function');
        NativeModules.GraphPhotoUpload.upload();
        expect(NativeModules.GraphPhotoUpload.upload).to.have.been.calledOnce;
      });
    });

    describe('I18n', function () {
      it('should have translation dict', function () {
        expect(NativeModules.I18n.translationsDictionary).to.be.a('string');
        const dict = JSON.parse(NativeModules.I18n.translationsDictionary);
        expect(Object.keys(dict)).to.have.lengthOf(1);
      });
    });

    describe('ImageLoader', function () {
      it('should have getSize as spy', function (done) {
        const callback = sinon.spy(function () {
          expect(callback).to.have.been.calledWith(320, 240);
          done();
        });
        expect(NativeModules.ImageLoader.getSize).to.be.a('function');
        NativeModules.ImageLoader.getSize('', callback);
        expect(NativeModules.ImageLoader.getSize).to.have.been.calledOnce;
      });

      it('should have prefetchImage as spy', function () {
        expect(NativeModules.ImageLoader.prefetchImage).to.be.a('function');
        NativeModules.ImageLoader.prefetchImage();
        expect(NativeModules.ImageLoader.prefetchImage).to.have.been.calledOnc
      });
    });

    describe('ImageViewManager', function () {
      it('should have getSize as spy', function (done) {
        const callback = sinon.spy(function () {
          expect(callback).to.have.been.calledWith(320, 240);
          done();
        });
        expect(NativeModules.ImageViewManager.getSize).to.be.a('function');
        NativeModules.ImageViewManager.getSize('', callback);
        expect(NativeModules.ImageViewManager.getSize).to.have.been.calledOnce;
      });

      it('should have prefetchImage as spy', function () {
        expect(NativeModules.ImageViewManager.prefetchImage).to.be.a('function');
        NativeModules.ImageViewManager.prefetchImage();
        expect(NativeModules.ImageViewManager.prefetchImage).to.have.been.calledOnc
      });
    });

    describe('KeyboardObserver', function () {
      it('should have addListener as spy', function () {
        expect(NativeModules.KeyboardObserver.addListener).to.be.a('function');
        NativeModules.KeyboardObserver.addListener();
        expect(NativeModules.KeyboardObserver.addListener).to.have.been.calledOnce;
      });

      it('should have removeListeners as spy', function () {
        expect(NativeModules.KeyboardObserver.removeListeners).to.be.a('function');
        NativeModules.KeyboardObserver.removeListeners();
        expect(NativeModules.KeyboardObserver.removeListeners).to.have.been.calledOnc
      });
    });

    describe('ModalFullscreenViewManager', function () {
      it('should be empty', function () {
        expect(NativeModules.ModalFullscreenViewManager).to.be.an('object');
        expect(Object.keys(NativeModules.ModalFullscreenViewManager)).to.deep.equal([]);
      });
    });

    describe('Networking', function () {
      it('should have sendRequest as spy', function () {
        expect(NativeModules.Networking.sendRequest).to.be.a('function');
        NativeModules.Networking.sendRequest();
        expect(NativeModules.Networking.sendRequest).to.have.been.calledOnce;
      });

      it('should have abortRequest as spy', function () {
        expect(NativeModules.Networking.abortRequest).to.be.a('function');
        NativeModules.Networking.abortRequest();
        expect(NativeModules.Networking.abortRequest).to.have.been.calledOnce;
      });

      it('should have addListener as spy', function () {
        expect(NativeModules.Networking.addListener).to.be.a('function');
        NativeModules.Networking.addListener();
        expect(NativeModules.Networking.addListener).to.have.been.calledOnce;
      });

      it('should have removeListeners as spy', function () {
        expect(NativeModules.Networking.removeListeners).to.be.a('function');
        NativeModules.Networking.removeListeners();
        expect(NativeModules.Networking.removeListeners).to.have.been.calledOnce;
      });
    });

    describe('SourceCode', function () {
      it('should have null scriptUrl', function () {
        expect(NativeModules.SourceCode.scriptURL).to.be.null;
      });
    });

    describe('StatusBarManager', function () {
      it('should have setStyle as spy', function () {
        expect(NativeModules.StatusBarManager.setStyle).to.be.a('function');
        NativeModules.StatusBarManager.setStyle();
        expect(NativeModules.StatusBarManager.setStyle).to.have.been.calledOnce;
      });

      it('should have setHidden as spy', function () {
        expect(NativeModules.StatusBarManager.setHidden).to.be.a('function');
        NativeModules.StatusBarManager.setHidden();
        expect(NativeModules.StatusBarManager.setHidden).to.have.been.calledOnce;
      });

      it('should have setNetworkActivityIndicatorVisible as spy', function () {
        expect(NativeModules.StatusBarManager.setNetworkActivityIndicatorVisible).to.be.a('function');
        NativeModules.StatusBarManager.setNetworkActivityIndicatorVisible();
        expect(NativeModules.StatusBarManager.setNetworkActivityIndicatorVisible).to.have.been.calledOnce;
      });

      it('should have setBackgroundColor as spy', function () {
        expect(NativeModules.StatusBarManager.setBackgroundColor).to.be.a('function');
        NativeModules.StatusBarManager.setBackgroundColor();
        expect(NativeModules.StatusBarManager.setBackgroundColor).to.have.been.calledOnce;
      });

      it('should have setTranslucent as spy', function () {
        expect(NativeModules.StatusBarManager.setTranslucent).to.be.a('function');
        NativeModules.StatusBarManager.setTranslucent();
        expect(NativeModules.StatusBarManager.setTranslucent).to.have.been.calledOnce;
      });
    });

    describe('Timing', function () {
      it('should have createTimer as spy', function () {
        expect(NativeModules.Timing.createTimer).to.be.a('function');
        NativeModules.Timing.createTimer();
        expect(NativeModules.Timing.createTimer).to.have.been.calledOnce;
      });

      it('should have deleteTimer as spy', function () {
        expect(NativeModules.Timing.deleteTimer).to.be.a('function');
        NativeModules.Timing.deleteTimer();
        expect(NativeModules.Timing.deleteTimer).to.have.been.calledOnce;
      });
    });

    describe('UIManager', function () {
      it('should have customBubblingEventTypes as object', function () {
        expect(NativeModules.UIManager.customBubblingEventTypes).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.customBubblingEventTypes)).to.deep.equal([]);
      });

      it('should have customDirectEventTypes as object', function () {
        expect(NativeModules.UIManager.customDirectEventTypes).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.customDirectEventTypes)).to.deep.equal([]);
      });

      it('should have window dimensions', function () {
        expect(NativeModules.UIManager.Dimensions).to.be.an('object');
        expect(NativeModules.UIManager.Dimensions.window).to.deep.equal({
          fontScale: 2,
          height: 1334,
          scale: 2,
          width: 750
        });
      });

      it('should have ModalFullscreenView as object', function () {
        expect(NativeModules.UIManager.ModalFullscreenView).to.be.an('object');
        expect(NativeModules.UIManager.ModalFullscreenView.Constants).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.ModalFullscreenView.Constants)).to.deep.equal([]);
      });

      it('should have ScrollView as object', function () {
        expect(NativeModules.UIManager.ScrollView).to.be.an('object');
        expect(NativeModules.UIManager.ScrollView.Constants).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.ScrollView.Constants)).to.deep.equal([]);
      });

      it('should have View as object', function () {
        expect(NativeModules.UIManager.View).to.be.an('object');
        expect(NativeModules.UIManager.View.Constants).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.View.Constants)).to.deep.equal([]);
      });
    });


    describe('WebSocketModule', function () {
      it('should have connect as spy', function () {
        expect(NativeModules.WebSocketModule.connect).to.be.a('function');
        NativeModules.WebSocketModule.connect();
        expect(NativeModules.WebSocketModule.connect).to.have.been.calledOnce;
      });

      it('should have send as spy', function () {
        expect(NativeModules.WebSocketModule.send).to.be.a('function');
        NativeModules.WebSocketModule.send();
        expect(NativeModules.WebSocketModule.send).to.have.been.calledOnce;
      });

      it('should have sendBinary as spy', function () {
        expect(NativeModules.WebSocketModule.sendBinary).to.be.a('function');
        NativeModules.WebSocketModule.sendBinary();
        expect(NativeModules.WebSocketModule.sendBinary).to.have.been.calledOnce;
      });

      it('should have ping as spy', function () {
        expect(NativeModules.WebSocketModule.ping).to.be.a('function');
        NativeModules.WebSocketModule.ping();
        expect(NativeModules.WebSocketModule.ping).to.have.been.calledOnce;
      });

      it('should have close as spy', function () {
        expect(NativeModules.WebSocketModule.close).to.be.a('function');
        NativeModules.WebSocketModule.close();
        expect(NativeModules.WebSocketModule.close).to.have.been.calledOnce;
      });

      it('should have addListener as spy', function () {
        expect(NativeModules.WebSocketModule.addListener).to.be.a('function');
        NativeModules.WebSocketModule.addListener();
        expect(NativeModules.WebSocketModule.addListener).to.have.been.calledOnce;
      });

      it('should have removeListeners as spy', function () {
        expect(NativeModules.WebSocketModule.removeListeners).to.be.a('function');
        NativeModules.WebSocketModule.removeListeners();
        expect(NativeModules.WebSocketModule.removeListeners).to.have.been.calledOnce;
      });
    });
  });
});
