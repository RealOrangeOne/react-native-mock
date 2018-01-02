var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/react-native/react-native.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _createMockComponent=require('./components/createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);
var _defineGlobalProperty=require('./defineGlobalProperty');var _defineGlobalProperty2=_interopRequireDefault(_defineGlobalProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

// Export React, plus some native additions.
var ReactNative={
// Components
ActivityIndicator:require('./components/ActivityIndicator'),
ActivityIndicatorIOS:require('./components/ActivityIndicatorIOS'),
ART:require('./components/ART'),
Button:(0,_createMockComponent2['default'])('Button'),
DatePickerIOS:(0,_createMockComponent2['default'])('DatePickerIOS'),
DrawerLayoutAndroid:require('./components/DrawerLayoutAndroid'),
Image:require('./components/Image'),
ImageEditor:(0,_createMockComponent2['default'])('ImageEditor'),
ImageStore:(0,_createMockComponent2['default'])('ImageStore'),
KeyboardAvoidingView:(0,_createMockComponent2['default'])('KeyboardAvoidingView'),
ListView:require('./components/ListView'),
MapView:(0,_createMockComponent2['default'])('MapView'),
Modal:(0,_createMockComponent2['default'])('Modal'),
Navigator:require('./components/Navigator'),
NavigatorIOS:(0,_createMockComponent2['default'])('NavigatorIOS'),
Picker:require('./components/Picker'),
PickerIOS:(0,_createMockComponent2['default'])('PickerIOS'),
ProgressBarAndroid:(0,_createMockComponent2['default'])('ProgressBarAndroid'),
ProgressViewIOS:(0,_createMockComponent2['default'])('ProgressViewIOS'),
ScrollView:require('./components/ScrollView'),
SegmentedControlIOS:(0,_createMockComponent2['default'])('SegmentedControlIOS'),
SliderIOS:(0,_createMockComponent2['default'])('SliderIOS'),
SnapshotViewIOS:(0,_createMockComponent2['default'])('SnapshotViewIOS'),
Switch:(0,_createMockComponent2['default'])('Switch'),
PullToRefreshViewAndroid:(0,_createMockComponent2['default'])('PullToRefreshViewAndroid'),
RecyclerViewBackedScrollView:(0,_createMockComponent2['default'])('RecyclerViewBackedScrollView'),
RefreshControl:(0,_createMockComponent2['default'])('RefreshControl'),
StatusBar:require('./components/StatusBar'),
SwitchAndroid:(0,_createMockComponent2['default'])('SwitchAndroid'),
SwitchIOS:(0,_createMockComponent2['default'])('SwitchIOS'),
TabBarIOS:require('./components/TabBarIOS'),
Text:require('./components/Text'),
TextInput:require('./components/TextInput'),
ToastAndroid:(0,_createMockComponent2['default'])('ToastAndroid'),
ToolbarAndroid:(0,_createMockComponent2['default'])('ToolbarAndroid'),
Touchable:(0,_createMockComponent2['default'])('Touchable'),
TouchableHighlight:(0,_createMockComponent2['default'])('TouchableHighlight'),
TouchableNativeFeedback:require('./components/TouchableNativeFeedback'),
TouchableOpacity:require('./components/TouchableOpacity'),
TouchableWithoutFeedback:require('./components/TouchableWithoutFeedback'),
View:require('./components/View'),
ViewPagerAndroid:(0,_createMockComponent2['default'])('ViewPagerAndroid'),
WebView:require('./components/WebView'),

// APIs
ActionSheetIOS:require('./api/ActionSheetIOS'),
Alert:require('./api/Alert'),
AlertIOS:require('./api/AlertIOS'),
Animated:require('./api/Animated'),
AppRegistry:require('./api/AppRegistry'),
AppState:require('./api/AppState'),
AppStateIOS:require('./api/AppStateIOS'),
AsyncStorage:require('./api/AsyncStorage'),
BackAndroid:require('./api/BackAndroid'),
CameraRoll:require('./api/CameraRoll'),
Clipboard:require('./NativeModules/Clipboard'),
DatePickerAndroid:require('./api/DatePickerAndroid'),
Dimensions:require('./api/Dimensions'),
Easing:require('./api/Animated/Easing'),
ImagePickerIOS:require('./api/ImagePickerIOS'),
IntentAndroid:require('./api/IntentAndroid'),
InteractionManager:require('./api/InteractionManager'),
Keyboard:require('./api/Keyboard'),
LayoutAnimation:require('./api/LayoutAnimation'),
Linking:require('./api/Linking'),
LinkingIOS:require('./api/LinkingIOS'),
NetInfo:require('./api/NetInfo'),
PanResponder:require('./api/PanResponder'),
PixelRatio:require('./api/PixelRatio'),
PushNotificationIOS:require('./api/PushNotificationIOS'),
Settings:require('./api/Settings'),
Share:require('./api/Share'),
StatusBarIOS:require('./api/StatusBarIOS'),
StyleSheet:require('./api/StyleSheet'),
TimePickerAndroid:require('./api/TimePickerAndroid'),
UIManager:require('./NativeModules/UIManager'),
VibrationIOS:require('./api/VibrationIOS'),

// Plugins
DeviceEventEmitter:require('./plugins/DeviceEventEmitter'),
NativeAppEventEmitter:require('./plugins/NativeAppEventEmitter'),
NativeEventEmitter:require('./Libraries/EventEmitter/NativeEventEmitter'),
NativeModules:require('./NativeModules'),
Platform:require('./plugins/Platform'),
processColor:require('./plugins/processColor'),
requireNativeComponent:require('./plugins/requireNativeComponent'),

// Prop Types
ColorPropType:require('./propTypes/ColorPropType'),
EdgeInsetsPropType:require('./propTypes/EdgeInsetsPropType'),
PointPropType:require('./propTypes/PointPropType'),
NavigationExperimental:require('./Libraries/NavigationExperimental'),
ViewPropTypes:require('./propTypes/ViewPropTypes')};



// See http://facebook.github.io/react/docs/addons.html
var ReactNativeAddons={
// LinkedStateMixin: require('react-addons-linked-state-mixin') deprecated,
// Perf: require('react-addons-perf'),
PureRenderMixin:require('react-addons-pure-render-mixin'),
TestModule:require('./NativeModules/TestModule'),
// TestUtils: require('react-addons-test-utils'),
// TODO(lmr): not sure where to find this
// batchedUpdates: require('ReactUpdates').batchedUpdates, deprecated
// cloneWithProps: require('react-addons-clone-with-props'), deprecated
createFragment:require('react-addons-create-fragment'),
update:require('react-addons-update')};


_extends(ReactNative,_react2['default'],{addons:ReactNativeAddons});

// Global properties defined in https://github.com/facebook/react-native/blob/master/Libraries/Core/InitializeCore.js
(0,_defineGlobalProperty2['default'])('XMLHttpRequest',function(){return require('./Libraries/Network/XMLHttpRequest');});
(0,_defineGlobalProperty2['default'])('FormData',function(){return require('./Libraries/Network/FormData');});
(0,_defineGlobalProperty2['default'])('Headers',function(){return require('./Libraries/Network/Headers');});
(0,_defineGlobalProperty2['default'])('Response',function(){return require('./Libraries/Network/Response');});

module.exports=ReactNative;