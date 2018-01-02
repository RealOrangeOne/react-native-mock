var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

CardStackPanResponder=function(){function CardStackPanResponder(){_classCallCheck(this,CardStackPanResponder);}return CardStackPanResponder;}();var


PagerPanResponder=function(){function PagerPanResponder(){_classCallCheck(this,PagerPanResponder);}return PagerPanResponder;}();var


NavigationCard=function(_React$Component){_inherits(NavigationCard,_React$Component);function NavigationCard(){_classCallCheck(this,NavigationCard);return _possibleConstructorReturn(this,(NavigationCard.__proto__||Object.getPrototypeOf(NavigationCard)).apply(this,arguments));}return NavigationCard;}(_react2['default'].Component);NavigationCard.
CardStackPanResponder=CardStackPanResponder;NavigationCard.
CardStackStyleInterpolator={
forHorizontal:function(){function forHorizontal(){return{};}return forHorizontal;}(),
forVertical:function(){function forVertical(){return{};}return forVertical;}()};NavigationCard.

PagerPanResponder=PagerPanResponder;NavigationCard.
PagerStyleInterpolator={
forHorizontal:function(){function forHorizontal(){return{};}return forHorizontal;}()};



module.exports=NavigationCard;