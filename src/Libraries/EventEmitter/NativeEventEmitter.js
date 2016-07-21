const invariant = require('invariant');
const EventEmitter = require('./EventEmitter');
const EmitterSubscription = require('./EmitterSubscription');
const EventSubscriptionVender = require('./EventSubscriptionVendor');

const sharedSubscriber = new EventSubscriptionVender();

class NativeEventEmitter extends EventEmitter {
  constructor(nativeModule) {
    super(sharedSubscriber);
    invariant(nativeModule, 'Native module cannot be null.');
    this._nativeModule = nativeModule;
  }

  addListener(eventType, listener, context) {
    return super.addListener(eventType, listener, context);
  }

  removeAllListeners(eventType: string) {
    invariant(eventType, 'eventType argument is required.');
    super.removeAllListeners(eventType);
  }

  removeSubscription(subscription: EmitterSubscription) {
    super.removeSubscription(subscription);
  }
}

module.exports = NativeEventEmitter;
