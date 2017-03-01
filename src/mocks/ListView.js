/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of react-native. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* eslint-disable react/prop-types */

const React = require('react');
const ScrollView = require('ScrollView');  // eslint-disable-line import/no-unresolved
const StaticRenderer = require('StaticRenderer'); // eslint-disable-line import/no-unresolved
const View = require('View'); // eslint-disable-line import/no-unresolved

class ListViewMock extends React.Component {
  componentDidMount() {
    ListViewMock.latestRef = this;
  }

  render() {
    const { dataSource, renderFooter, renderHeader } = this.props;
    const rows = [renderHeader && renderHeader()];
    const allRowIDs = dataSource.rowIdentities;
    for (let sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
      const sectionID = dataSource.sectionIdentities[sectionIdx];
      const rowIDs = allRowIDs[sectionIdx];
      for (let rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
        const rowID = rowIDs[rowIdx];
        rows.push(
          <StaticRenderer
            shouldUpdate
            key={rowID}
            render={this.props.renderRow.bind(
              null,
              dataSource.getRowData(sectionIdx, rowIdx),
              sectionID,
              rowID
            )}
          />
        );
      }
    }

    renderFooter && rows.push(renderFooter());

    return (
      <View>
        {this.props.renderScrollComponent({ children: rows })}
      </View>
    );
  }
}

ListViewMock.defaultProps = {
  renderScrollComponent: (props) => <ScrollView {...props} />
};

ListViewMock.DataSource = require('ListViewDataSource'); // eslint-disable-line import/no-unresolved

module.exports = ListViewMock;
