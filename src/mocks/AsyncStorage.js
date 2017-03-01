let AsyncStorage = require('AsyncStorage');

let _data = {};

AsyncStorage.getItem = function (key, callback) {
  return new Promise(function (resolve, reject) {
    const foundData = _data[key];
    if (foundData === undefined) {
      callback && callback();
      reject();
    } else {
      callback && callback(null, foundData);
      resolve(foundData);
    }
  });
};

AsyncStorage.setItem = function (key, value, callback) {
  return new Promise(function (resolve, reject) {
    _data[key] = value;
    callback && callback();
    resolve();
  });
};

AsyncStorage.clear = function (callback) {
  return new Promise(function (resolve, reject) {
    _data = {};
    callback && callback();
    resolve();
  });
};

module.exports = AsyncStorage;
