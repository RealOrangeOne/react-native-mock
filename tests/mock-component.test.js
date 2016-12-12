import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import { expect } from 'chai';
import createMockComponent from '../src/createMockComponent';

describe('Mock Component', function () {
  it('Should render correctly', function () {
    const Component = createMockComponent('test');
    const instance = shallow(<Component />);
    expect(instance.html()).to.equal('<test></test>');
  });

  it('Should replace RCT in name', function () {
    const Component = createMockComponent('RCTtest');
    const instance = shallow(<Component />);
    expect(instance.html()).to.equal('<test></test>');
  });

  it('Should replace RK in name', function () {
    const Component = createMockComponent('RKtest');
    const instance = shallow(<Component />);
    expect(instance.html()).to.equal('<test></test>');
  });

  it('Should pass props and children', function () {
    const Component = createMockComponent('test');
    const instance = shallow(<Component className="foo">bar</Component>);
    expect(instance.html()).to.equal('<test class="foo">bar</test>');
  });

  it('should be accessible globally', function () {
    expect(require('requireNativeComponent').name).to.equal(createMockComponent.name);  // eslint-disable-line import/no-unresolved
  });
});
