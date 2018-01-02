


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

/**
 * React Native's layout system is based on Flexbox and is powered both
 * on iOS and Android by an open source project called css-layout:
 * https://github.com/facebook/css-layout
 *
 * The implementation in css-layout is slightly different from what the
 * Flexbox spec defines - for example, we chose more sensible default
 * values. Please refer to the css-layout README for details.
 *
 * These properties are a subset of our styles that are consumed by the layout
 * algorithm and affect the positioning and sizing of views.
 */
var LayoutPropTypes={
width:_propTypes2['default'].number,
height:_propTypes2['default'].number,
top:_propTypes2['default'].number,
left:_propTypes2['default'].number,
right:_propTypes2['default'].number,
bottom:_propTypes2['default'].number,
margin:_propTypes2['default'].number,
marginVertical:_propTypes2['default'].number,
marginHorizontal:_propTypes2['default'].number,
marginTop:_propTypes2['default'].number,
marginBottom:_propTypes2['default'].number,
marginLeft:_propTypes2['default'].number,
marginRight:_propTypes2['default'].number,
padding:_propTypes2['default'].number,
paddingVertical:_propTypes2['default'].number,
paddingHorizontal:_propTypes2['default'].number,
paddingTop:_propTypes2['default'].number,
paddingBottom:_propTypes2['default'].number,
paddingLeft:_propTypes2['default'].number,
paddingRight:_propTypes2['default'].number,
borderWidth:_propTypes2['default'].number,
borderTopWidth:_propTypes2['default'].number,
borderRightWidth:_propTypes2['default'].number,
borderBottomWidth:_propTypes2['default'].number,
borderLeftWidth:_propTypes2['default'].number,

position:_propTypes2['default'].oneOf([
'absolute',
'relative']),


// https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
flexDirection:_propTypes2['default'].oneOf([
'row',
'column']),


// https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
flexWrap:_propTypes2['default'].oneOf([
'wrap',
'nowrap']),


// How to align children in the main direction
// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
justifyContent:_propTypes2['default'].oneOf([
'flex-start',
'flex-end',
'center',
'space-between',
'space-around']),


// How to align children in the cross direction
// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
alignItems:_propTypes2['default'].oneOf([
'flex-start',
'flex-end',
'center',
'stretch']),


// How to align the element in the cross direction
// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
alignSelf:_propTypes2['default'].oneOf([
'auto',
'flex-start',
'flex-end',
'center',
'stretch']),


// https://developer.mozilla.org/en-US/docs/Web/CSS/flex
flex:_propTypes2['default'].number};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/LayoutPropTypes.js
 */
module.exports=LayoutPropTypes;