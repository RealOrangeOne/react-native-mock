


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var arrayOfNumberPropType=_propTypes2['default'].arrayOf(_propTypes2['default'].number);/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/TransformPropTypes.js
 */var transformMatrixPropType=function(){function transformMatrixPropType(props,propName,componentName){
if(props.transform&&props.transformMatrix){
return new Error(
'transformMatrix and transform styles cannot be used on the same '+
'component');

}for(var _len=arguments.length,rest=Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){rest[_key-3]=arguments[_key];}
return arrayOfNumberPropType.apply(undefined,[props,propName,componentName].concat(rest));
}return transformMatrixPropType;}();

var transformPropTypes={
transform:_propTypes2['default'].arrayOf(
_propTypes2['default'].oneOfType([
_propTypes2['default'].shape({perspective:_propTypes2['default'].number}),
_propTypes2['default'].shape({rotate:_propTypes2['default'].string}),
_propTypes2['default'].shape({rotateX:_propTypes2['default'].string}),
_propTypes2['default'].shape({rotateY:_propTypes2['default'].string}),
_propTypes2['default'].shape({rotateZ:_propTypes2['default'].string}),
_propTypes2['default'].shape({scale:_propTypes2['default'].number}),
_propTypes2['default'].shape({scaleX:_propTypes2['default'].number}),
_propTypes2['default'].shape({scaleY:_propTypes2['default'].number}),
_propTypes2['default'].shape({translateX:_propTypes2['default'].number}),
_propTypes2['default'].shape({translateY:_propTypes2['default'].number}),
_propTypes2['default'].shape({skewX:_propTypes2['default'].string}),
_propTypes2['default'].shape({skewY:_propTypes2['default'].string})])),


transformMatrix:transformMatrixPropType};


module.exports=transformPropTypes;