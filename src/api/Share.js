
class Share {

  static share(content, options) {
    return Promise.resolve('sharedAction');
  }

  static get sharedAction() {
    return 'sharedAction';
  }

  static get dismissedAction() {
    return 'dismissedAction';
  }
}

module.exports = Share;
