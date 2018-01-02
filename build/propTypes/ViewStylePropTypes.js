var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/ViewStylePropTypes.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _ColorPropType=require('./ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _LayoutPropTypes=require('./LayoutPropTypes');var _LayoutPropTypes2=_interopRequireDefault(_LayoutPropTypes);
var _ShadowPropTypesIOS=require('./ShadowPropTypesIOS');var _ShadowPropTypesIOS2=_interopRequireDefault(_ShadowPropTypesIOS);
var _TransformPropTypes=require('./TransformPropTypes');var _TransformPropTypes2=_interopRequireDefault(_TransformPropTypes);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

/**
 * Warning: Some of these properties may not be supported in all releases.
 */
var ViewStylePropTypes=_extends({},_LayoutPropTypes2['default'],_ShadowPropTypesIOS2['default'],_TransformPropTypes2['default'],{



backfaceVisibility:_propTypes2['default'].oneOf(['visible','hidden']),
backgroundColor:_ColorPropType2['default'],
borderColor:_ColorPropType2['default'],
borderTopColor:_ColorPropType2['default'],
borderRightColor:_ColorPropType2['default'],
borderBottomColor:_ColorPropType2['default'],
borderLeftColor:_ColorPropType2['default'],
borderRadius:_propTypes2['default'].number,
borderTopLeftRadius:_propTypes2['default'].number,
borderTopRightRadius:_propTypes2['default'].number,
borderBottomLeftRadius:_propTypes2['default'].number,
borderBottomRightRadius:_propTypes2['default'].number,
borderStyle:_propTypes2['default'].oneOf(['solid','dotted','dashed']),
borderWidth:_propTypes2['default'].number,
borderTopWidth:_propTypes2['default'].number,
borderRightWidth:_propTypes2['default'].number,
borderBottomWidth:_propTypes2['default'].number,
borderLeftWidth:_propTypes2['default'].number,
opacity:_propTypes2['default'].number,
overflow:_propTypes2['default'].oneOf(['visible','hidden']),
/**
   * (Android-only) Sets the elevation of a view, using Android's underlying
   * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
   * This adds a drop shadow to the item and affects z-order for overlapping views.
   * Only supported on Android 5.0+, has no effect on earlier versions.
   * @platform android
   */
elevation:_propTypes2['default'].number});


module.exports=ViewStylePropTypes;