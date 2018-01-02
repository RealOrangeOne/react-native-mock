var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var
Path=function(){
function Path(path){var _this=this;_classCallCheck(this,Path);
[
'push',
'reset',
'move',
'moveTo',
'line',
'lineTo',
'curve',
'curveTo',
'arc',
'arcTo',
'counterArc',
'counterArcTo',
'close'].
forEach(function(methodName){_this[methodName]=function(){return _this;};});

this.path=path||[];
}_createClass(Path,[{key:'toJSON',value:function(){function toJSON()

{
return JSON.stringify(this.path);
}return toJSON;}()}]);return Path;}();


module.exports=Path;