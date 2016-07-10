/**
 * @see  https://github.com/facebook/react-native/blob/master/Libraries/NavigationExperimental/NavigationExperimental.js
 */
import createMockComponent from '../../components/createMockComponent';
import StateUtils from './NavigationStateUtils';
import PropTypes from './NavigationPropTypes';

module.exports = {
  StateUtils,

  AnimatedView: createMockComponent('NavigationAnimatedView'),
  Transitioner: createMockComponent('NavigationTransitioner'),

  Card: createMockComponent('NavigationCard'),
  CardStack: createMockComponent('NavigationCardStack'),
  Header: createMockComponent('NavigationHeader'),

  PropTypes,
};
