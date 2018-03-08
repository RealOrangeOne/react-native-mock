#!/usr/bin/env bash

# run Jest tests to check against speed and API coverage

npm install jest@18.1.0 babel-jest@18.0.0

node_modules/.bin/jest tests/integration/**/*.test.js --runInBand --verbose

exit 0
