import { expect } from 'chai';


describe('StyleSheet', () => {
  const { StyleSheet } = require('react-native');
  let styles, rawStyles;

  beforeEach(function () {
    rawStyles = {
      listItem: {
        flex: 1,
        fontSize: 16,
        color: 'white'
      },
      selectedListItem: {
        color: 'green'
      },
      headerItem: {
        fontWeight: 'bold'
      }
    };
    styles = StyleSheet.create(rawStyles);
  });

  it('shouldnt mutate', function () {
    expect(rawStyles).to.deep.equal(styles);
  });

  describe('Flatten', function () {
    it('should flatten', () => {
      const result = StyleSheet.flatten(styles.listItem);
      expect(result).to.deep.equal({
        flex: 1,
        fontSize: 16,
        color: 'white'
      });
    });

    it('should flatten with array', () => {
      const result = StyleSheet.flatten([styles.listItem, styles.selectedListItem]);
      expect(result).to.deep.equal({
        flex: 1,
        fontSize: 16,
        color: 'green'
      });
    });

    it('should flatten with nested array', () => {
      const result = StyleSheet.flatten(
        [styles.listItem, [styles.headerItem, styles.selectedListItem]]
      );
      expect(result).to.deep.equal({
        flex: 1,
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold'
      });
    });
  });
});
