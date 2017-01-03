import mockery from 'mockery';
import _ from 'underscore';
import defineGlobalProperty from './defineGlobalProperty';
import createMockComponent from './createMockComponent';
import React from 'react';
import sinon from 'sinon';

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

mockery.registerMock('requireNativeComponent', sinon.spy(viewName => props => React.createElement(
  viewName,
  props,
  props.children  // eslint-disable-line react/prop-types
)));

require('./NativeModules');

const mockPropRegistry = {};
mockery.registerMock('ReactNativePropRegistry', {
  register: sinon.spy(id => id),
  getByID: sinon.spy(() => mockPropRegistry)
});

mockery.registerMock('ErrorUtils', require('./mocks/ErrorUtils'));

export const MOCK_COMPONENTS = [
  'Image',
  'Text',
  'TextInput',
  'Modal',
  'View',
  'ActivityIndicator',
  'RefreshControl',
  'ScrollView'
];

_.forEach(MOCK_COMPONENTS, function (component) {
  mockery.registerMock(component, createMockComponent(component));
});

mockery.registerMock('ListViewDataSource', require('./mocks/ListViewDataSource'));
mockery.registerMock('ListView', require('./mocks/ListView'));

require('./image-compiler');
