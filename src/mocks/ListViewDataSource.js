const DataSource = require('ListViewDataSource'); // eslint-disable-line import/no-unresolved

DataSource.prototype.toJSON = function () {
  function ListViewDataSource(dataBlob) {
    this.items = 0;
    // Ensure this doesn't throw.
    try {
      Object.keys(dataBlob).forEach((key) => {
        this.items += dataBlob[key] && (
          dataBlob[key].length || dataBlob[key].size || 0
        );
      });
    } catch (e) {
      this.items = 'unknown';
    }
  }
  return new ListViewDataSource(this._dataBlob);
};

module.exports = DataSource;
