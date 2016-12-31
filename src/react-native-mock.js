import mockery from 'mockery';
import _ from 'underscore';
import defineGlobalProperty from './defineGlobalProperty';
import createMockComponent from './createMockComponent';
import React from 'react';

require('./babel');

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
});

defineGlobalProperty('__DEV__', true);
defineGlobalProperty('Promise', require('promise'));
defineGlobalProperty('regeneratorRuntime', require('regenerator-runtime/runtime'));

mockery.registerMock('ensureComponentIsNative', () => true);

_.mapObject(require('../haste-map.json').hasteMap, function (val, key) {
  mockery.registerSubstitute(key, val);
});

require('./NativeModules');

const mockPropRegistry = {};
mockery.registerMock('ReactNativePropRegistry', {
  register: id => id,
  getByID: () => mockPropRegistry
});

const MOCK_COMPONENTS = [
  'Image',
  'Text',
  'TextInput',
  'Modal',
  'View',
  'ScrollView',
  'ActivityIndicator',
  'ListView'
];

_.forEach(MOCK_COMPONENTS, function (component) {
  mockery.registerMock(component, createMockComponent(component));
});

mockery.registerMock('requireNativeComponent', viewName => props => React.createElement(
  viewName,
  props,
  props.children,
));


mockery.registerMock('ListViewDataSource', require('./mocks/ListViewDataSource'));
mockery.registerMock('ErrorUtils', require('./mocks/ErrorUtils'));
