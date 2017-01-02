import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { buildComponentHTML } from '../../test-utils';


describe('ActivityIndicator', function () {
  let ActivityIndicator;

  beforeEach(function () {
    ActivityIndicator = require('react-native').ActivityIndicator;
  });

  it('should render', function () {
    const instance = shallow(<ActivityIndicator />);
    expect(instance.html()).to.equal(buildComponentHTML('ActivityIndicator'));
  });
});
