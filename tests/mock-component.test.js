import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import { expect } from 'chai';
import mockery from 'mockery';
import createMockComponent, { MOCK_COMPONENTS } from '../src/createMockComponent';

describe('Mock Component', function () {
  const testComponent = React.Component;

  beforeEach(function () {
    testComponent.name = testComponent.displayName = 'test';
    mockery.registerMock('test', testComponent);
  });

  afterEach(function () {
    mockery.deregisterMock('test');
  });

  it('Should render correctly', function () {
    const Component = createMockComponent('test');
    const instance = shallow(<Component />);
    expect(instance.html()).to.equal('<test></test>');
  });

  it('Should replace RCT in name', function () {
    testComponent.name = testComponent.displayName = 'RCTtest';
    mockery.registerMock('test', testComponent);
    const Component = createMockComponent('test');
    const instance = shallow(<Component />);
    expect(instance.html()).to.equal('<test></test>');
  });

  it('Should replace RK in name', function () {
    testComponent.name = testComponent.displayName = 'RKtest';
    mockery.registerMock('test', testComponent);
    const Component = createMockComponent('test');
    const instance = shallow(<Component />);
    expect(instance.html()).to.equal('<test></test>');
  });

  it('Should pass props and children', function () {
    const Component = createMockComponent('test');
    const instance = shallow(<Component className="foo">bar</Component>);
    expect(instance.html()).to.equal('<test class="foo">bar</test>');
  });

  it('should be accessible globally', function () {
    const RequiredComponent = require('requireNativeComponent')('test'); // eslint-disable-line import/no-unresolved
    const Component = createMockComponent('test');
    expect(shallow(<Component />).html()).to.equal(shallow(<RequiredComponent />).html());
  });

  describe('Native Components', function () {
    MOCK_COMPONENTS.forEach(function (component) {
      it('should require ' + component, function () {
        const Component = require(component);
        expect(Component).to.be.a('function');
        const instance = shallow(<Component />);
        expect(instance.html()).to.include(component);
      });
    });
  });
});
