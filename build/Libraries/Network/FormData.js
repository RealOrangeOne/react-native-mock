var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

























/**
 * Polyfill for XMLHttpRequest2 FormData API, allowing multipart POST requests
 * with mixed data (string, native files) to be submitted via XMLHttpRequest.
 *
 * Example:
 *
 *   var photo = {
 *     uri: uriFromCameraRoll,
 *     type: 'image/jpeg',
 *     name: 'photo.jpg',
 *   };
 *
 *   var body = new FormData();
 *   body.append('authToken', 'secret');
 *   body.append('photo', photo);
 *   body.append('title', 'A beautiful photo!');
 *
 *   xhr.open('POST', serverURL);
 *   xhr.send(body);
 *//**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FormData
 * 
 */var FormData=function(){function FormData(){_classCallCheck(this,FormData);this._parts=[];}_createClass(FormData,[{key:'append',value:function(){function append(key,value){// The XMLHttpRequest spec doesn't specify if duplicate keys are allowed.
// MDN says that any new values should be appended to existing values.
// In any case, major browsers allow duplicate keys, so that's what we'll do
// too. They'll simply get appended as additional form data parts in the
// request body, leaving the server to deal with them.
this._parts.push([key,value]);}return append;}()},{key:'getParts',value:function(){function getParts()

{
return this._parts.map(function(_ref){var _ref2=_slicedToArray(_ref,2),name=_ref2[0],value=_ref2[1];
var contentDisposition='form-data; name="'+name+'"';

var headers={'content-disposition':contentDisposition};

// The body part is a "blob", which in React Native just means
// an object with a `uri` attribute. Optionally, it can also
// have a `name` and `type` attribute to specify filename and
// content type (cf. web Blob interface.)
if((typeof value==='undefined'?'undefined':_typeof(value))==='object'){
if(typeof value.name==='string'){
headers['content-disposition']+='; filename="'+value.name+'"';
}
if(typeof value.type==='string'){
headers['content-type']=value.type;
}
return _extends({},value,{headers:headers,fieldName:name});
}
// Convert non-object values to strings as per FormData.append() spec
return{string:String(value),headers:headers,fieldName:name};
});
}return getParts;}()}]);return FormData;}();


module.exports=FormData;