var _Platform=require('../plugins/Platform');var _Platform2=_interopRequireDefault(_Platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var resizePropTypes=[
'contain',
'cover',
'stretch'];


if(_Platform2['default'].OS==='ios'){
resizePropTypes.push('repeat','center');
}

module.exports=resizePropTypes;