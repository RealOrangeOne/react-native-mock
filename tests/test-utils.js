import { expect } from 'chai';
import sinon from 'sinon';


export const buildComponentHTML = (componentName) =>  `<${componentName}></${componentName}>`;

export const expectSpy = function isSpy(spy) {
  expect(spy).to.contain.all.keys(
    Object.keys(sinon.spy())
  );
};
