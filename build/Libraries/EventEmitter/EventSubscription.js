var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */var
EventSubscription=function(){
/**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */
function EventSubscription(subscriber){_classCallCheck(this,EventSubscription);
this.subscriber=subscriber;
}

/**
   * Removes this subscription from the subscriber that controls it.
   */_createClass(EventSubscription,[{key:"remove",value:function(){function remove()
{
this.subscriber.removeSubscription(this);
}return remove;}()}]);return EventSubscription;}();


module.exports=EventSubscription;