class Headers {
  _headers: Object;

  constructor() {
    this._headers = [];
  }

  append(name: string, value: string) {
    const normalName: string = name.toLowerCase();
    this._headers.push({ name: normalName, value });
  }

  delete(name: string) {
    const normalName: string = name.toLowerCase();
    this._headers = this._headers.filter((pair) => pair.name !== normalName);
  }

  entries() {
    return this._headers.entries();
  }

  get(name: string) {
    const normalName: string = name.toLowerCase();
    const header = this._headers.find((pair) => pair.name === normalName);
    return header ? header.value : undefined;
  }

  getAll(name: string) {
    const normalName: string = name.toLowerCase();
    const headers = this._headers.filter((pair) => pair.name === normalName);
    return headers.map((pair) => pair.value);
  }

  has(name: string) {
    const normalName: string = name.toLowerCase();
    return this.get(normalName);
  }

  keys() {
    return this._headers.map((pair) => pair.name);
  }

  set(name: string, value: string) {
    const normalName: string = name.toLowerCase();
    this.delete(normalName);
    this.append(normalName, value);
  }

  values() {
    return this._headers.map((pair) => pair.value);
  }
}

module.exports = Headers;
