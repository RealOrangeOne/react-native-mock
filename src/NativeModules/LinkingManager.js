let _test = url => true;
const LinkingManger = {
  openUrl(url) {
    return Promise.resolve(true);
  },
  canOpenUrl(url) {
    return Promise.resolve(_test(url));
  },

  __setCanOpenURLTest(test) {
    _test = test;
  }
};

module.exports = LinkingManger;
