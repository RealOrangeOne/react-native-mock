import mockery from 'mockery';

function execute(fun, context, args) {
  return fun.apply(context, args);
}

function reportError(error) {
  throw error;
}

mockery.registerMock('ErrorUtils', {
  apply: execute,
  applyWithGuard: execute,
  guard: callback => callback,
  inGuard: () => true,
  reportError,
  setGlobalHandler: () => undefined,
});
