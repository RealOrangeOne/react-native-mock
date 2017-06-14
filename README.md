# Why is this forked?
We need to fork this in order for our unit-tests to run in https://github.com/NerdWallet/mobile-creditcards
For more context, we need to use React 16 for the newer versions of React Native. However, this library does not support that yet.
See https://github.com/RealOrangeOne/react-native-mock/pull/130, https://github.com/RealOrangeOne/react-native-mock/issues/129, and https://github.com/airbnb/enzyme/issues/928
Once these have been resolved, we can point back to the original repo. If these issues are not resolved soon, then we probably need to switch testing frameworks.


[![Join the chat at https://gitter.im/RealOrangeOne/react-native-mock](https://badges.gitter.im/RealOrangeOne/react-native-mock.svg)](https://gitter.im/RealOrangeOne/react-native-mock?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A fully mocked and test-friendly version of react native

## Requirements
- Node.js 4+
- The latest version of react-native

__Note__: This library is designed to work with the most recent version of react-native. If you aren't using the most recent version, you will need to download an older version of this library, as the API is likely to be different, and the dependencies are likely to break.

## How Am I Supposed To Use This?

```bash
npm i react-native-mock --save-dev
```

```js
/* file-that-runs-before-all-of-my-tests.js */

// This will mutate `react-native`'s require cache with `react-native-mock`'s.
require('react-native-mock/mock'); // <-- side-effects!!!
```

## Why?

Testing React Native components is *hard*.  I'm hoping this makes it easier.

I wrote a React Testing Library that works really well for React "Web", but didn't really work for React "Native" without something like this.


## Wait... Is this actually a terrible idea?

I don't know. Maybe.

I'd love to figure that out though... feel free to file an issue if you have opinions.


## Contributing
Discovered a bug, got a new feature, or found something that needs improving? __Submit a PR!__

Make sure to read through the CONTRIBUTING.md file before submitting your PR!

### Core Contributors
- [Jake Howard](https://github.com/RealOrangeOne)
- [Leland Richardson](https://github.com/lelandrichardson) (Original Creator)

## What do the labels mean?
See [this wiki page](https://github.com/RealOrangeOne/react-native-mock/wiki/Labels---What-do-they-mean%3F).
