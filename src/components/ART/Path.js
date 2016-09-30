
class Path {
  constructor(path) {
    [
      'push',
      'reset',
      'move',
      'moveTo',
      'line',
      'lineTo',
      'curve',
      'curveTo',
      'arc',
      'arcTo',
      'counterArc',
      'counterArcTo',
      'close'
    ].forEach((methodName) => { this[methodName] = () => this; });

    this.path = path || [];
  }

  toJSON() {
    return JSON.stringify(this.path);
  }
}

module.exports = Path;
