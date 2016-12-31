function execute(fun, context, args) {
  return fun.apply(context, args);
}

function reportError(error) {
  throw error;
}

module.exports = {
  apply: execute,
  applyWithGuard: execute,
  guard: callback => callback,
  inGuard: () => true,
  reportError,
  setGlobalHandler: () => undefined
};
