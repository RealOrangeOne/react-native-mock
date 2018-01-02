var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _ColorPropType=require('./ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var ShadowPropTypesIOS={
/**
   * Sets the drop shadow color
   * @platform ios
   */
shadowColor:_ColorPropType2['default'],
/**
   * Sets the drop shadow offset
   * @platform ios
   */
shadowOffset:_propTypes2['default'].shape({
width:_propTypes2['default'].number,
height:_propTypes2['default'].number}),

/**
   * Sets the drop shadow opacity (multiplied by the color's alpha component)
   * @platform ios
   */
shadowOpacity:_propTypes2['default'].number,
/**
   * Sets the drop shadow blur radius
   * @platform ios
   */
shadowRadius:_propTypes2['default'].number};


module.exports=ShadowPropTypesIOS;