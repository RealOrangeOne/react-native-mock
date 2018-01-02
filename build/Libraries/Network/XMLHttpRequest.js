var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule XMLHttpRequest
 * 
 */

var UNSENT=0;
var OPENED=1;
var HEADERS_RECEIVED=2;
var LOADING=3;
var DONE=4;var

XMLHttpRequest=function(){function XMLHttpRequest(){_classCallCheck(this,XMLHttpRequest);this.






UNSENT=UNSENT;this.
OPENED=OPENED;this.
HEADERS_RECEIVED=HEADERS_RECEIVED;this.
LOADING=LOADING;this.
DONE=DONE;this.









readyState=UNSENT;this.

status=0;this.
timeout=0;}_createClass(XMLHttpRequest,[{key:"open",value:function(){function open(






method,url,async){
}return open;}()},{key:"send",value:function(){function send(

data){
}return send;}()},{key:"abort",value:function(){function abort()

{
}return abort;}()}]);return XMLHttpRequest;}();XMLHttpRequest.UNSENT=UNSENT;XMLHttpRequest.OPENED=OPENED;XMLHttpRequest.HEADERS_RECEIVED=HEADERS_RECEIVED;XMLHttpRequest.LOADING=LOADING;XMLHttpRequest.DONE=DONE;


module.exports=XMLHttpRequest;