class Response {
  _status: number;
  _headers: Headers;
  _body: string;

  constructor() {
    this._status = 200;
    this._headers = new Headers();
    this._body = '';
  }

  get status(): number {
    return this._status;
  }

  get headers(): Headers {
    return this._headers;
  }

  get body(): string {
    return this._body;
  }
}

module.exports = Response;
