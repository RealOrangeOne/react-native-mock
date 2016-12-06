/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule XMLHttpRequest
 * @flow
 */

const UNSENT = 0;
const OPENED = 1;
const HEADERS_RECEIVED = 2;
const LOADING = 3;
const DONE = 4;

class XMLHttpRequest {
  static UNSENT: number = UNSENT;
  static OPENED: number = OPENED;
  static HEADERS_RECEIVED: number = HEADERS_RECEIVED;
  static LOADING: number = LOADING;
  static DONE: number = DONE;

  UNSENT: number = UNSENT;
  OPENED: number = OPENED;
  HEADERS_RECEIVED: number = HEADERS_RECEIVED;
  LOADING: number = LOADING;
  DONE: number = DONE;

  onload: ?Function;
  onloadstart: ?Function;
  onprogress: ?Function;
  ontimeout: ?Function;
  onerror: ?Function;
  onloadend: ?Function;
  onreadystatechange: ?Function;

  readyState: number = UNSENT;
  responseHeaders: ?Object;
  status: number = 0;
  timeout: number = 0;
  responseURL: ?string;

  upload: {
    addEventListener: ?Function;
  };

  open(method: string, url: string, async: ?boolean): void {
  }

  send(data: any): void {
  }

  abort(): void {
  }
}

module.exports = XMLHttpRequest;
