var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createMockComponent=require('./createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var NavigatorSceneConfigType=_propTypes2['default'].shape({
gestures:_propTypes2['default'].object,
springFriction:_propTypes2['default'].number,
springTension:_propTypes2['default'].number,
defaultTransitionVelocity:_propTypes2['default'].number,
animationInterpolators:_react2['default'].PropTypes.object});


var NavigatorSceneConfigs={
PushFromRight:NavigatorSceneConfigType,
FloatFromRight:NavigatorSceneConfigType,
FloatFromLeft:NavigatorSceneConfigType,
FloatFromBottom:NavigatorSceneConfigType,
FloatFromBottomAndroid:NavigatorSceneConfigType,
FadeAndroid:NavigatorSceneConfigType,
HorizontalSwipeJump:NavigatorSceneConfigType,
HorizontalSwipeJumpFromRight:NavigatorSceneConfigType,
VerticalUpSwipeJump:NavigatorSceneConfigType,
VerticalDownSwipeJump:NavigatorSceneConfigType};


var Navigator=(0,_createReactClass2['default'])({
propTypes:{
/**
     * Optional function that allows configuration about scene animations and
     * gestures. Will be invoked with the route and the routeStack and should
     * return a scene configuration object
     *
     * ```
     * (route, routeStack) => Navigator.SceneConfigs.FloatFromRight
     * ```
     */
configureScene:_propTypes2['default'].func,

/**
     * Required function which renders the scene for a given route. Will be
     * invoked with the route and the navigator object
     *
     * ```
     * (route, navigator) =>
     *   <MySceneComponent title={route.title} navigator={navigator} />
     * ```
     */
renderScene:_propTypes2['default'].func.isRequired,

/**
     * Specify a route to start on. A route is an object that the navigator
     * will use to identify each scene to render. `initialRoute` must be
     * a route in the `initialRouteStack` if both props are provided. The
     * `initialRoute` will default to the last item in the `initialRouteStack`.
     */
initialRoute:_propTypes2['default'].object,

/**
     * Provide a set of routes to initially mount. Required if no initialRoute
     * is provided. Otherwise, it will default to an array containing only the
     * `initialRoute`
     */
initialRouteStack:_propTypes2['default'].arrayOf(_propTypes2['default'].object),

/**
     * Will emit the target route upon mounting and before each nav transition
     */
onWillFocus:_propTypes2['default'].func,

/**
     * Will be called with the new route of each scene after the transition is
     * complete or after the initial mounting
     */
onDidFocus:_propTypes2['default'].func,

/**
     * Optionally provide a navigation bar that persists across scene
     * transitions
     */
navigationBar:_propTypes2['default'].node,

/**
     * Optionally provide the navigator object from a parent Navigator
     */
navigator:_propTypes2['default'].object,

/**
     * Styles to apply to the container of each scene
     */
sceneStyle:_View2['default'].propTypes.style},


statics:{
BreadcrumbNavigationBar:(0,_createMockComponent2['default'])('NavigatorBreadcrumbNavigationBar'),
NavigationBar:(0,_createMockComponent2['default'])('NavigatorNavigationBar'),
SceneConfigs:NavigatorSceneConfigs},

render:function(){function render(){
return null;
}return render;}()});


module.exports=Navigator;