import { expect } from 'chai';

describe('InteractionManager', () => {
  const { InteractionManager } = require('react-native');

  it('should have right functions', function () {
    expect(InteractionManager.runAfterInteractions).to.be.a('function');
    expect(InteractionManager.createInteractionHandle).to.be.a('function');
    expect(InteractionManager.clearInteractionHandle).to.be.a('function');
    expect(InteractionManager.setDeadline).to.be.a('function');
    expect(InteractionManager.addListener).to.be.a('function');
  });

  it('should schedule task', function () {
    const cancelablePromise = InteractionManager.runAfterInteractions(() => {});
    expect(cancelablePromise).to.have.all.keys('then', 'done', 'cancel');
    expect(cancelablePromise.then).to.be.a('function');
    expect(cancelablePromise.done).to.be.a('function');
    expect(cancelablePromise.cancel).to.be.a('function');
  });
});
