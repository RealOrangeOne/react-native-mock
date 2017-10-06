/**
 *https://github.com/facebook/react-native/blob/master/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js
 */
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import View from './View';
import UIManager from '../NativeModules/UIManager';
import ColorPropType from '../propTypes/ColorPropType';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

const DrawerConsts = UIManager.AndroidDrawerLayout.Constants;

const DrawerLayoutAndroid = createReactClass({

  propTypes: {
    ...View.propTypes,
    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default), drags do not dismiss the keyboard.
     *   - 'on-drag', the keyboard is dismissed when a drag begins.
     */
    keyboardDismissMode: PropTypes.oneOf([
      'none', // default
      'on-drag',
    ]),
    /**
     * Specifies the background color of the drawer. The default value is white.
     * If you want to set the opacity of the drawer, use rgba. Example:
     *
     * ```
     * return (
     *   <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
     *   </DrawerLayoutAndroid>
     * );
     * ```
     */
    drawerBackgroundColor: ColorPropType,
    /**
     * Specifies the side of the screen from which the drawer will slide in.
     */
    drawerPosition: PropTypes.oneOf([
      DrawerConsts.DrawerPosition.Left,
      DrawerConsts.DrawerPosition.Right
    ]),
    /**
     * Specifies the width of the drawer, more precisely the width of the view that be pulled in
     * from the edge of the window.
     */
    drawerWidth: PropTypes.number,
    /**
     * Specifies the lock mode of the drawer. The drawer can be locked in 3 states:
     * - unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
     * - locked-closed, meaning that the drawer will stay closed and not respond to gestures.
     * - locked-open, meaning that the drawer will stay opened and not respond to gestures.
     * The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).
     */
    drawerLockMode: PropTypes.oneOf([
      'unlocked',
      'locked-closed',
      'locked-open'
    ]),
    /**
     * Function called whenever there is an interaction with the navigation view.
     */
    onDrawerSlide: PropTypes.func,
    /**
     * Function called when the drawer state has changed. The drawer can be in 3 states:
     * - idle, meaning there is no interaction with the navigation view happening at the time
     * - dragging, meaning there is currently an interaction with the navigation view
     * - settling, meaning that there was an interaction with the navigation view, and the
     * navigation view is now finishing its closing or opening animation
     */
    onDrawerStateChanged: PropTypes.func,
    /**
     * Function called whenever the navigation view has been opened.
     */
    onDrawerOpen: PropTypes.func,
    /**
     * Function called whenever the navigation view has been closed.
     */
    onDrawerClose: PropTypes.func,
    /**
     * The navigation view that will be rendered to the side of the screen and can be pulled in.
     */
    renderNavigationView: PropTypes.func.isRequired,

    /**
     * Make the drawer take the entire screen and draw the background of the
     * status bar to allow it to open over the status bar. It will only have an
     * effect on API 21+.
     */
    statusBarBackgroundColor: ColorPropType,
  },

  mixins: [NativeMethodsMixin],

  statics: {
    positions: DrawerConsts.DrawerPosition
  },

  openDrawer() {
    // do nothing
  },

  closeDrawer() {
    // do nothing
  },

  render() {
    return null;
  }

});

module.exports = DrawerLayoutAndroid;
