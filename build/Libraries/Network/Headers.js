var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Headers=function(){


function Headers(){_classCallCheck(this,Headers);
this._headers=[];
}_createClass(Headers,[{key:"append",value:function(){function append(

name,value){
var normalName=name.toLowerCase();
this._headers.push({name:normalName,value:value});
}return append;}()},{key:"delete",value:function(){function _delete(

name){
var normalName=name.toLowerCase();
this._headers=this._headers.filter(function(pair){return pair.name!==normalName;});
}return _delete;}()},{key:"entries",value:function(){function entries()

{
return this._headers.entries();
}return entries;}()},{key:"get",value:function(){function get(

name){
var normalName=name.toLowerCase();
var header=this._headers.find(function(pair){return pair.name===normalName;});
return header?header.value:undefined;
}return get;}()},{key:"getAll",value:function(){function getAll(

name){
var normalName=name.toLowerCase();
var headers=this._headers.filter(function(pair){return pair.name===normalName;});
return headers.map(function(pair){return pair.value;});
}return getAll;}()},{key:"has",value:function(){function has(

name){
var normalName=name.toLowerCase();
return this.get(normalName);
}return has;}()},{key:"keys",value:function(){function keys()

{
return this._headers.map(function(pair){return pair.name;});
}return keys;}()},{key:"set",value:function(){function set(

name,value){
var normalName=name.toLowerCase();
this["delete"](normalName);
this.append(normalName,value);
}return set;}()},{key:"values",value:function(){function values()

{
return this._headers.map(function(pair){return pair.value;});
}return values;}()}]);return Headers;}();


module.exports=Headers;