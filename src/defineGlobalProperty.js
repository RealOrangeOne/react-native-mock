export default function defineGlobalProperty(name, value) {
  Object.defineProperty(global, name, {
    configurable: true,
    value,
  });
}
