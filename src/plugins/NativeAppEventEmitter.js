// const EventEmitter = require('events').EventEmitter;
const EventEmitter = require('fbemitter').EventEmitter;

const NativeAppEventEmitter = new EventEmitter();

module.exports = NativeAppEventEmitter;
