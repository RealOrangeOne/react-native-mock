function defineGlobalProperty(name, value) {
  Object.defineProperty(global, name, {
    configurable: true,
    value: value(),
  });
}

export default defineGlobalProperty;
