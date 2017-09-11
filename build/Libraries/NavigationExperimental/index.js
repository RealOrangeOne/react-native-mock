


var _createMockComponent=require('../../components/createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);
var _NavigationStateUtils=require('./NavigationStateUtils');var _NavigationStateUtils2=_interopRequireDefault(_NavigationStateUtils);
var _NavigationCard=require('./NavigationCard');var _NavigationCard2=_interopRequireDefault(_NavigationCard);
var _NavigationPropTypes=require('./NavigationPropTypes');var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/**
 * @see  https://github.com/facebook/react-native/blob/master/Libraries/NavigationExperimental/NavigationExperimental.js
 */module.exports={
StateUtils:_NavigationStateUtils2['default'],

AnimatedView:(0,_createMockComponent2['default'])('NavigationAnimatedView'),
Transitioner:(0,_createMockComponent2['default'])('NavigationTransitioner'),

Card:_NavigationCard2['default'],
CardStack:(0,_createMockComponent2['default'])('NavigationCardStack'),
Header:(0,_createMockComponent2['default'])('NavigationHeader'),

PropTypes:_NavigationPropTypes2['default']};