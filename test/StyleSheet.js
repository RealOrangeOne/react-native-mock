import React from '../src/react-native';
import { expect } from 'chai';

let {StyleSheet} = React;

describe('StyleSheet', () => {
  it('flatten', () => {
    let styles = StyleSheet.create({
      listItem: {
        flex: 1,
        fontSize: 16,
        color: 'white'
      },
      selectedListItem: {
       color: 'green'
      }
    });

    let result = StyleSheet.flatten([styles.listItem, styles.selectedListItem]);
    let expectedResult = {
      flex: 1,
      fontSize: 16,
      color: 'green'
    };
    expect(result).to.deep.equal(expectedResult);

    let result2 = StyleSheet.flatten(styles.listItem);
    let expectedResult2 = {
      flex: 1,
      fontSize: 16,
      color: 'white'
    };
    expect(result2).to.deep.equal(expectedResult2);
  });
});
