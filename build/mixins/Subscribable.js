
var SubscribableMixin={

componentWillMount:function(){function componentWillMount(){
this._subscribableSubscriptions=[];
}return componentWillMount;}(),

componentWillUnmount:function(){function componentWillUnmount(){
this._subscribableSubscriptions.forEach(
function(subscription){return subscription.remove();});

this._subscribableSubscriptions=null;
}return componentWillUnmount;}(),

/**
   * Special form of calling `addListener` that *guarantees* that a
   * subscription *must* be tied to a component instance, and therefore will
   * be cleaned up when the component is unmounted. It is impossible to create
   * the subscription and pass it in - this method must be the one to create
   * the subscription and therefore can guarantee it is retained in a way that
   * will be cleaned up.
   *
   * @param {EventEmitter} eventEmitter emitter to subscribe to.
   * @param {string} eventType Type of event to listen to.
   * @param {function} listener Function to invoke when event occurs.
   * @param {object} context Object to use as listener context.
   */
addListenerOn:function(){function addListenerOn(eventEmitter,eventType,listener,context){
this._subscribableSubscriptions.push(
eventEmitter.addListener(eventType,listener,context));

}return addListenerOn;}()};


var Subscribable={
Mixin:SubscribableMixin};


module.exports=Subscribable;