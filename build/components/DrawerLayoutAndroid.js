var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 *https://github.com/facebook/react-native/blob/master/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _UIManager=require('../NativeModules/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);
var _ColorPropType=require('../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var ReactPropTypes=_react2['default'].PropTypes;
var DrawerConsts=_UIManager2['default'].AndroidDrawerLayout.Constants;

var DrawerLayoutAndroid=_react2['default'].createClass({displayName:'DrawerLayoutAndroid',

propTypes:_extends({},
_View2['default'].propTypes,{
/**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default), drags do not dismiss the keyboard.
     *   - 'on-drag', the keyboard is dismissed when a drag begins.
     */
keyboardDismissMode:ReactPropTypes.oneOf([
'none',// default
'on-drag']),

/**
     * Specifies the background color of the drawer. The default value is white.
     * If you want to set the opacity of the drawer, use rgba. Example:
     *
     * ```
     * return (
     *   <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
     *   </DrawerLayoutAndroid>
     * );
     * ```
     */
drawerBackgroundColor:_ColorPropType2['default'],
/**
     * Specifies the side of the screen from which the drawer will slide in.
     */
drawerPosition:ReactPropTypes.oneOf([
DrawerConsts.DrawerPosition.Left,
DrawerConsts.DrawerPosition.Right]),

/**
     * Specifies the width of the drawer, more precisely the width of the view that be pulled in
     * from the edge of the window.
     */
drawerWidth:ReactPropTypes.number,
/**
     * Specifies the lock mode of the drawer. The drawer can be locked in 3 states:
     * - unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
     * - locked-closed, meaning that the drawer will stay closed and not respond to gestures.
     * - locked-open, meaning that the drawer will stay opened and not respond to gestures.
     * The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).
     */
drawerLockMode:ReactPropTypes.oneOf([
'unlocked',
'locked-closed',
'locked-open']),

/**
     * Function called whenever there is an interaction with the navigation view.
     */
onDrawerSlide:ReactPropTypes.func,
/**
     * Function called when the drawer state has changed. The drawer can be in 3 states:
     * - idle, meaning there is no interaction with the navigation view happening at the time
     * - dragging, meaning there is currently an interaction with the navigation view
     * - settling, meaning that there was an interaction with the navigation view, and the
     * navigation view is now finishing its closing or opening animation
     */
onDrawerStateChanged:ReactPropTypes.func,
/**
     * Function called whenever the navigation view has been opened.
     */
onDrawerOpen:ReactPropTypes.func,
/**
     * Function called whenever the navigation view has been closed.
     */
onDrawerClose:ReactPropTypes.func,
/**
     * The navigation view that will be rendered to the side of the screen and can be pulled in.
     */
renderNavigationView:ReactPropTypes.func.isRequired,

/**
     * Make the drawer take the entire screen and draw the background of the
     * status bar to allow it to open over the status bar. It will only have an
     * effect on API 21+.
     */
statusBarBackgroundColor:_ColorPropType2['default']}),


mixins:[_NativeMethodsMixin2['default']],

statics:{
positions:DrawerConsts.DrawerPosition},


openDrawer:function(){function openDrawer(){
// do nothing
}return openDrawer;}(),

closeDrawer:function(){function closeDrawer(){
// do nothing
}return closeDrawer;}(),

render:function(){function render(){
return null;
}return render;}()});



module.exports=DrawerLayoutAndroid;