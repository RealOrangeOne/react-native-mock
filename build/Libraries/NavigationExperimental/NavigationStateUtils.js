var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function get(state,key){
return state.routes.find(function(route){return route.key===key;})||null;
}

function indexOf(state,key){
return state.routes.map(function(route){return route.key;}).indexOf(key);
}

function has(state,key){
return!!state.routes.some(function(route){return route.key===key;});
}

function push(state,route){
if(indexOf(state,route.key)!==-1){
throw new Error('should not push route with duplicated key '+route.key);
}

var routes=[].concat(_toConsumableArray(
state.routes),[
route]);


return _extends({},
state,{
index:routes.length-1,
routes:routes});

}

function pop(state){
if(state.index<=0){
return state;
}
var routes=state.routes.slice(0,-1);
return _extends({},
state,{
index:routes.length-1,
routes:routes});

}

function jumpToIndex(state,index){
if(index===state.index){
return state;
}

if(!state.routes[index]){
throw new Error('invalid index '+index+' to jump to');
}

return _extends({},
state,{
index:index});

}


function jumpTo(state,key){
var index=indexOf(state,key);
return jumpToIndex(state,index);
}

function replaceAtIndex(state,index,route){
if(!state.routes[index]){
throw new Error('invalid index '+index+' for replacing route '+route.key);
}

if(state.routes[index]===route){
return state;
}

var routes=state.routes.slice();
routes[index]=route;

return _extends({},
state,{
index:index,
routes:routes});

}

function replaceAt(state,key,route){
var index=indexOf(state,key);
return replaceAtIndex(state,index,route);
}

function reset(state,routes){var index=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;
if(!routes.length&&Array.isArray(routes)){
throw new Error('invalid routes to replace');
}

var nextIndex=index===undefined?routes.length-1:index;

if(state.routes.length===routes.length&&state.index===nextIndex){
var compare=function(){function compare(route,ii){return routes[ii]===route;}return compare;}();
if(state.routes.every(compare)){
return state;
}
}

if(!routes[nextIndex]){
throw new Error('invalid index '+nextIndex+' to reset');
}

return _extends({},
state,{
index:nextIndex,
routes:routes});

}

module.exports={
get:get,
has:has,
indexOf:indexOf,
jumpTo:jumpTo,
jumpToIndex:jumpToIndex,
pop:pop,
push:push,
replaceAt:replaceAt,
replaceAtIndex:replaceAtIndex,
reset:reset};