var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var
Share=function(){function Share(){_classCallCheck(this,Share);}_createClass(Share,null,[{key:'share',value:function(){function share(

content,options){
return Promise.resolve('sharedAction');
}return share;}()},{key:'sharedAction',get:function(){function get()

{
return'sharedAction';
}return get;}()},{key:'dismissedAction',get:function(){function get()

{
return'dismissedAction';
}return get;}()}]);return Share;}();


module.exports=Share;