# React-Native-Mock

[![Build Status](https://travis-ci.org/RealOrangeOne/react-native-mock.svg?branch=master)](https://travis-ci.org/RealOrangeOne/react-native-mock)
[![npm](https://img.shields.io/npm/v/react-native-mock.svg)](https://www.npmjs.com/package/react-native-mock)
[![npm](https://img.shields.io/npm/dm/react-native-mock.svg)]((https://www.npmjs.com/package/react-native-mock)
[![Join the chat at https://gitter.im/RealOrangeOne/react-native-mock](https://badges.gitter.im/RealOrangeOne/react-native-mock.svg)](https://gitter.im/RealOrangeOne/react-native-mock?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A fully mocked and test-friendly version of react native

## Requirements
- Node.js 4+
- The latest version of react-native

__Note__: This library is designed to work with the most recent version of react-native. If you aren't using the most recent version, you will probably need to download an older version of this library, as the API is likely to be different, and the dependencies are likely to break.

## How Am I Supposed To Use This?

##### Install it

```bash
npm install react-native-mock --save-dev
```

##### Add it to your test pipeline _(there's multiple ways)_
```js
/* file-that-runs-before-all-of-my-tests.js */
require('react-native-mock/mock'); // <-- side-effects!!!
```

```bash
mocha --require react-native-mock/mock ...
```

## Contributing
Discovered a bug, got a new feature, or found something that needs improving? __Submit a PR!__

Make sure to read through the CONTRIBUTING.md file before submitting your PR!

### Core Contributors
- [Jake Howard](https://github.com/RealOrangeOne)
- [Leland Richardson](https://github.com/lelandrichardson) (Original Creator)
