

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Animated=function(){function Animated(){_classCallCheck(this,Animated);}return Animated;}();

/* NavigationAction */
var action=_propTypes2['default'].shape({
type:_propTypes2['default'].string.isRequired});


/* NavigationAnimatedValue  */
var animatedValue=_propTypes2['default'].instanceOf(Animated.Value);

/* NavigationRoute  */
var navigationRoute=_propTypes2['default'].shape({
key:_propTypes2['default'].string.isRequired});


/* navigationRoute  */
var navigationState=_propTypes2['default'].shape({
index:_propTypes2['default'].number.isRequired,
routes:_propTypes2['default'].arrayOf(navigationRoute)});


/* NavigationLayout */
var layout=_propTypes2['default'].shape({
height:animatedValue,
initHeight:_propTypes2['default'].number.isRequired,
initWidth:_propTypes2['default'].number.isRequired,
isMeasured:_propTypes2['default'].bool.isRequired,
width:animatedValue});


/* NavigationScene */
var scene=_propTypes2['default'].shape({
index:_propTypes2['default'].number.isRequired,
isStale:_propTypes2['default'].bool.isRequired,
key:_propTypes2['default'].string.isRequired,
route:navigationRoute.isRequired});


/* NavigationSceneRendererProps */
var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationState.isRequired,
position:animatedValue.isRequired,
progress:animatedValue.isRequired,
scene:scene.isRequired,
scenes:_propTypes2['default'].arrayOf(scene).isRequired};


var SceneRenderer=_propTypes2['default'].shape(SceneRendererProps);

/* NavigationPanPanHandlers */
var panHandlers=_propTypes2['default'].shape({
onMoveShouldSetResponder:_propTypes2['default'].func.isRequired,
onMoveShouldSetResponderCapture:_propTypes2['default'].func.isRequired,
onResponderEnd:_propTypes2['default'].func.isRequired,
onResponderGrant:_propTypes2['default'].func.isRequired,
onResponderMove:_propTypes2['default'].func.isRequired,
onResponderReject:_propTypes2['default'].func.isRequired,
onResponderRelease:_propTypes2['default'].func.isRequired,
onResponderStart:_propTypes2['default'].func.isRequired,
onResponderTerminate:_propTypes2['default'].func.isRequired,
onResponderTerminationRequest:_propTypes2['default'].func.isRequired,
onStartShouldSetResponder:_propTypes2['default'].func.isRequired,
onStartShouldSetResponderCapture:_propTypes2['default'].func.isRequired});


/**
 * Helper function that extracts the props needed for scene renderer.
 */
function extractSceneRendererProps(props){
return{
layout:props.layout,
navigationState:props.navigationState,
position:props.position,
progress:props.progress,
scene:props.scene,
scenes:props.scenes};

}

module.exports={
// helpers
extractSceneRendererProps:extractSceneRendererProps,

// Bundled propTypes.
SceneRendererProps:SceneRendererProps,

// propTypes
SceneRenderer:SceneRenderer,
action:action,
navigationState:navigationState,
navigationRoute:navigationRoute,
panHandlers:panHandlers};