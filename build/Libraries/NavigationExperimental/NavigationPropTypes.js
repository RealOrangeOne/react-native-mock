

var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Animated=function(){function Animated(){_classCallCheck(this,Animated);}return Animated;}();var

PropTypes=_react2['default'].PropTypes;

/* NavigationAction */
var action=PropTypes.shape({
type:PropTypes.string.isRequired});


/* NavigationAnimatedValue  */
var animatedValue=PropTypes.instanceOf(Animated.Value);

/* NavigationRoute  */
var navigationRoute=PropTypes.shape({
key:PropTypes.string.isRequired});


/* navigationRoute  */
var navigationState=PropTypes.shape({
index:PropTypes.number.isRequired,
routes:PropTypes.arrayOf(navigationRoute)});


/* NavigationLayout */
var layout=PropTypes.shape({
height:animatedValue,
initHeight:PropTypes.number.isRequired,
initWidth:PropTypes.number.isRequired,
isMeasured:PropTypes.bool.isRequired,
width:animatedValue});


/* NavigationScene */
var scene=PropTypes.shape({
index:PropTypes.number.isRequired,
isStale:PropTypes.bool.isRequired,
key:PropTypes.string.isRequired,
route:navigationRoute.isRequired});


/* NavigationSceneRendererProps */
var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationState.isRequired,
position:animatedValue.isRequired,
progress:animatedValue.isRequired,
scene:scene.isRequired,
scenes:PropTypes.arrayOf(scene).isRequired};


var SceneRenderer=PropTypes.shape(SceneRendererProps);

/* NavigationPanPanHandlers */
var panHandlers=PropTypes.shape({
onMoveShouldSetResponder:PropTypes.func.isRequired,
onMoveShouldSetResponderCapture:PropTypes.func.isRequired,
onResponderEnd:PropTypes.func.isRequired,
onResponderGrant:PropTypes.func.isRequired,
onResponderMove:PropTypes.func.isRequired,
onResponderReject:PropTypes.func.isRequired,
onResponderRelease:PropTypes.func.isRequired,
onResponderStart:PropTypes.func.isRequired,
onResponderTerminate:PropTypes.func.isRequired,
onResponderTerminationRequest:PropTypes.func.isRequired,
onStartShouldSetResponder:PropTypes.func.isRequired,
onStartShouldSetResponderCapture:PropTypes.func.isRequired});


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