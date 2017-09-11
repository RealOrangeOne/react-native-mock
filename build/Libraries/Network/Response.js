var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Response=function(){




function Response(){_classCallCheck(this,Response);
this._status=200;
this._headers=new Headers();
this._body='';
}_createClass(Response,[{key:'status',get:function(){function get()

{
return this._status;
}return get;}()},{key:'headers',get:function(){function get()

{
return this._headers;
}return get;}()},{key:'body',get:function(){function get()

{
return this._body;
}return get;}()}]);return Response;}();


module.exports=Response;