import sinon from 'sinon';

function execute(fun, context, args) {
  return fun.apply(context, args);
}

function reportError(error) {
  throw error;
}

module.exports = {
  apply: execute,
  applyWithGuard: execute,
  guard: sinon.spy(callback => callback),
  inGuard: sinon.spy(() => true),
  reportError,
  setGlobalHandler: sinon.spy(() => undefined)
};
