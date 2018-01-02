var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function(){function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}}return get;}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var invariant=require('invariant');
var EventEmitter=require('./EventEmitter');
var EmitterSubscription=require('./EmitterSubscription');
var EventSubscriptionVender=require('./EventSubscriptionVendor');

var sharedSubscriber=new EventSubscriptionVender();var

NativeEventEmitter=function(_EventEmitter){_inherits(NativeEventEmitter,_EventEmitter);
function NativeEventEmitter(nativeModule){_classCallCheck(this,NativeEventEmitter);var _this=_possibleConstructorReturn(this,(NativeEventEmitter.__proto__||Object.getPrototypeOf(NativeEventEmitter)).call(this,
sharedSubscriber));
invariant(nativeModule,'Native module cannot be null.');
_this._nativeModule=nativeModule;return _this;
}_createClass(NativeEventEmitter,[{key:'addListener',value:function(){function addListener(

eventType,listener,context){
return _get(NativeEventEmitter.prototype.__proto__||Object.getPrototypeOf(NativeEventEmitter.prototype),'addListener',this).call(this,eventType,listener,context);
}return addListener;}()},{key:'removeAllListeners',value:function(){function removeAllListeners(

eventType){
invariant(eventType,'eventType argument is required.');
_get(NativeEventEmitter.prototype.__proto__||Object.getPrototypeOf(NativeEventEmitter.prototype),'removeAllListeners',this).call(this,eventType);
}return removeAllListeners;}()},{key:'removeSubscription',value:function(){function removeSubscription(

subscription){
_get(NativeEventEmitter.prototype.__proto__||Object.getPrototypeOf(NativeEventEmitter.prototype),'removeSubscription',this).call(this,subscription);
}return removeSubscription;}()}]);return NativeEventEmitter;}(EventEmitter);


module.exports=NativeEventEmitter;