var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/View.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ViewAccessibility=require('./ViewAccessibility');var _ViewAccessibility2=_interopRequireDefault(_ViewAccessibility);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _ViewPropTypes=require('../propTypes/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var

AccessibilityTraits=_ViewAccessibility2['default'].AccessibilityTraits,AccessibilityComponentTypes=_ViewAccessibility2['default'].AccessibilityComponentTypes;

var forceTouchAvailable=false;

var statics={
AccessibilityComponentType:AccessibilityComponentTypes,
AccessibilityTraits:AccessibilityTraits,
/**
   * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
   * @platform ios
   */
forceTouchAvailable:forceTouchAvailable};


var View=_react2['default'].createClass({displayName:'View',
propTypes:_ViewPropTypes2['default'],

mixins:[_NativeMethodsMixin2['default']],

statics:_extends({},
statics),


render:function(){function render(){
return null;
}return render;}()});


module.exports=View;