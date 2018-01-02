var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function createMockComponent(displayName){
return(0,_createReactClass2['default'])({
displayName:displayName,
render:function(){function render(){
return null;
}return render;}()});

}

module.exports=createMockComponent;