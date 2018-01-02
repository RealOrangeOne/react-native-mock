var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/ActivityIndicator/ActivityIndicator.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _ColorPropType=require('../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var ActivityIndicator=(0,_createReactClass2['default'])({
propTypes:_extends({},
_View2['default'].propTypes,{
/**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
animating:_propTypes2['default'].bool,
/**
     * The foreground color of the spinner (default is gray).
     */
color:_ColorPropType2['default'],
/**
     * Whether the indicator should hide when not animating (true by default).
     */
hidesWhenStopped:_propTypes2['default'].bool,
/**
     * Size of the indicator. Small has a height of 20, large has a height of 36.
     */
size:_propTypes2['default'].oneOf([
'small',
'large']),

/**
     * Invoked on mount and layout changes with
     *
     *   {nativeEvent: { layout: {x, y, width, height}}}.
     */
onLayout:_propTypes2['default'].func}),

mixins:[_NativeMethodsMixin2['default']],
render:function(){function render(){
return null;
}return render;}()});


module.exports=ActivityIndicator;