import mockery from 'mockery';
import _ from 'underscore';
import React from 'react';
import sinon from 'sinon';

import defineGlobalProperty from './defineGlobalProperty';
import createMockComponent, { MOCK_COMPONENTS } from './createMockComponent';
import mockNativeModules from './NativeModules';


// Setup babel to build react-native source
require('./babel');


// Enable mockery
mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
});


// Set react-native to be in dev mode
defineGlobalProperty('__DEV__', true);


// Fix Facebooks odd requiring stuff from generated map
_.mapObject(require('../haste-map.json').hasteMap, function (val, key) {
  mockery.registerSubstitute(key, val);
});


// miscellaneous mocks
mockery.registerMock('ensureComponentIsNative', () => true);
mockery.registerMock('requireNativeComponent', sinon.spy(viewName => props => React.createElement(
  viewName,
  props,
  props.children // eslint-disable-line react/prop-types
)));
mockery.registerMock('ErrorUtils', require('./mocks/ErrorUtils'));


// Setup native modules
_.forEach(Object.keys(mockNativeModules), function (mod) {
  mockery.registerMock(mod, mockNativeModules[mod]);
});

mockery.registerMock('NativeModules', mockNativeModules);


// Add native prop registry
const mockPropRegistry = {};
mockery.registerMock('ReactNativePropRegistry', {
  register: sinon.spy(id => id),
  getByID: sinon.spy(() => mockPropRegistry)
});


// Mock base components
_.forEach(MOCK_COMPONENTS, function (component) {
  mockery.registerMock(component, createMockComponent(component));
});


// Setup mocks for extra components / apis
mockery.registerMock('ListViewDataSource', require('./mocks/ListViewDataSource'));
mockery.registerMock('ListView', require('./mocks/ListView'));
mockery.registerMock('AsyncStorage', require('./mocks/AsyncStorage'));


// Allow requiring of images
require('./image-compiler');



// Setup globals at the end, incase anything above tries to override them
defineGlobalProperty('Promise', require('promise'));
defineGlobalProperty('regeneratorRuntime', require('regenerator-runtime/runtime'));
