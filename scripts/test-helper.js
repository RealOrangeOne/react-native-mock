const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const jsdom = require('jsdom');
const Enzyme = require('enzyme');
const React16Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new React16Adapter() });

chai.expect();
chai.use(sinonChai);
chai.use(chaiAsPromised);

// Jsdom document & window
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const win = dom.window;

// Add to global
global.document = win.document;
global.window = win;

// Add window keys to global window
Object.keys(window).forEach((key) => { // eslint-disable-line no-undef
  if (!(key in global)) {
    global[key] = window[key]; // eslint-disable-line no-undef
  }
});

if (!global.navigator.userAgent || !global.window.navigator.userAgent) {
  // react-dom needs a useragent
  global.navigator.userAgent = global.window.navigator.userAgent = 'node.js';
}
