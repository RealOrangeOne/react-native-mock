import mockery from 'mockery';

const DataSource = require('ListViewDataSource');  // eslint-disable-line import/no-unresolved

DataSource.prototype.toJSON = function () {
  function ListViewDataSource(dataBlob) {
    this.items = 0;
    // Ensure this doesn't throw.
    try {
      Object.keys(dataBlob).forEach(key => {
        this.items += dataBlob[key] && dataBlob[key].length;
      });
    } catch (e) {
      this.items = 'unknown';
    }
  }
  return new ListViewDataSource(this._dataBlob);
};

mockery.registerMock('ListViewDataSource', DataSource);
