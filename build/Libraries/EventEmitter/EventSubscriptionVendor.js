var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var invariant=require('invariant');

/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */var
EventSubscriptionVendor=function(){

function EventSubscriptionVendor(){_classCallCheck(this,EventSubscriptionVendor);
this._subscriptionsForType={};
this._currentSubscription=null;
}

/**
   * Adds a subscription keyed by an event type.
   *
   * @param {string} eventType
   * @param {EventSubscription} subscription
   */_createClass(EventSubscriptionVendor,[{key:'addSubscription',value:function(){function addSubscription(
eventType,subscription){
/* eslint-disable no-param-reassign */
invariant(
subscription.subscriber===this,
'The subscriber of the subscription is incorrectly set.');
if(!this._subscriptionsForType[eventType]){
this._subscriptionsForType[eventType]=[];
}
var key=this._subscriptionsForType[eventType].length;
this._subscriptionsForType[eventType].push(subscription);
subscription.eventType=eventType;
subscription.key=key;
return subscription;
}return addSubscription;}()

/**
   * Removes a bulk set of the subscriptions.
   *
   * @param {?string} eventType - Optional name of the event type whose
   *   registered supscriptions to remove, if null remove all subscriptions.
   */},{key:'removeAllSubscriptions',value:function(){function removeAllSubscriptions(
eventType){
if(eventType===undefined){
this._subscriptionsForType={};
}else{
delete this._subscriptionsForType[eventType];
}
}return removeAllSubscriptions;}()

/**
   * Removes a specific subscription. Instead of calling this function, call
   * `subscription.remove()` directly.
   *
   * @param {object} subscription
   */},{key:'removeSubscription',value:function(){function removeSubscription(
subscription){
var eventType=subscription.eventType;
var key=subscription.key;

var subscriptionsForType=this._subscriptionsForType[eventType];
if(subscriptionsForType){
delete subscriptionsForType[key];
}
}return removeSubscription;}()

/**
   * Returns the array of subscriptions that are currently registered for the
   * given event type.
   *
   * Note: This array can be potentially sparse as subscriptions are deleted
   * from it when they are removed.
   *
   * TODO: This returns a nullable array. wat?
   *
   * @param {string} eventType
   * @returns {?array}
   */},{key:'getSubscriptionsForType',value:function(){function getSubscriptionsForType(
eventType){
return this._subscriptionsForType[eventType];
}return getSubscriptionsForType;}()}]);return EventSubscriptionVendor;}();


module.exports=EventSubscriptionVendor;