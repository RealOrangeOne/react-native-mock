const sinonChai = require('sinon-chai');
const chai = require('chai');
const jsdom = require('jsdom');

chai.expect();
chai.use(sinonChai);

// Jsdom document & window
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Add to global
global.document = doc;
global.window = win;


// Add window keys to global window
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
