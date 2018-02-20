class Animated {}

import PropTypes from 'prop-types';

/* NavigationAction */
const action = PropTypes.shape({
  type: PropTypes.string.isRequired,
});

/* NavigationAnimatedValue  */
const animatedValue = PropTypes.instanceOf(Animated.Value);

/* NavigationRoute  */
const navigationRoute = PropTypes.shape({
  key: PropTypes.string.isRequired,
});

/* navigationRoute  */
const navigationState = PropTypes.shape({
  index: PropTypes.number.isRequired,
  routes: PropTypes.arrayOf(navigationRoute),
});

/* NavigationLayout */
const layout = PropTypes.shape({
  height: animatedValue,
  initHeight: PropTypes.number.isRequired,
  initWidth: PropTypes.number.isRequired,
  isMeasured: PropTypes.bool.isRequired,
  width: animatedValue,
});

/* NavigationScene */
const scene = PropTypes.shape({
  index: PropTypes.number.isRequired,
  isStale: PropTypes.bool.isRequired,
  key: PropTypes.string.isRequired,
  route: navigationRoute.isRequired,
});

/* NavigationSceneRendererProps */
const SceneRendererProps = {
  layout: layout.isRequired,
  navigationState: navigationState.isRequired,
  position: animatedValue.isRequired,
  progress: animatedValue.isRequired,
  scene: scene.isRequired,
  scenes: PropTypes.arrayOf(scene).isRequired,
};

const SceneRenderer = PropTypes.shape(SceneRendererProps);

/* NavigationPanPanHandlers */
const panHandlers = PropTypes.shape({
  onMoveShouldSetResponder: PropTypes.func.isRequired,
  onMoveShouldSetResponderCapture: PropTypes.func.isRequired,
  onResponderEnd: PropTypes.func.isRequired,
  onResponderGrant: PropTypes.func.isRequired,
  onResponderMove: PropTypes.func.isRequired,
  onResponderReject: PropTypes.func.isRequired,
  onResponderRelease: PropTypes.func.isRequired,
  onResponderStart: PropTypes.func.isRequired,
  onResponderTerminate: PropTypes.func.isRequired,
  onResponderTerminationRequest: PropTypes.func.isRequired,
  onStartShouldSetResponder: PropTypes.func.isRequired,
  onStartShouldSetResponderCapture: PropTypes.func.isRequired,
});

/**
 * Helper function that extracts the props needed for scene renderer.
 */
function extractSceneRendererProps(props) {
  return {
    layout: props.layout,
    navigationState: props.navigationState,
    position: props.position,
    progress: props.progress,
    scene: props.scene,
    scenes: props.scenes,
  };
}

module.exports = {
  // helpers
  extractSceneRendererProps,

  // Bundled propTypes.
  SceneRendererProps,

  // propTypes
  SceneRenderer,
  action,
  navigationState,
  navigationRoute,
  panHandlers,
};
