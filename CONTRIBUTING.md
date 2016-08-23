# Contributing Guidelines

## API
The API should be as close to the API of `react-native` as possible. If there are custom functions or variables exposed in a mock that isn't in the real API should be prefixed with  2 undercores, `__`. Requirement of parameters should be handled in the same way, if a parameter is required in `react-native`, it should be required in `react-native mock`, if it's not needed, then it shouldn't be needed here either.

## Components
"leaf node" components can be mocked out as just components returning `null` in their render method, and tested at a higher level using `shallow` from enzyme. Compound RN components like ListView, NavigationExperimental, etc. can do more complex things.

## Updates
`react-native-mock` should be compatible with the most recent version of `react-native`. Backwards compatibility is not something that needs to be considered, if the API changes, then so does the mock!

## Incrementing the version number
In simple: __Don't__. Leave that for us to manage when deploying!

## Tests
When adding a new mock, make sure it's got some in-depth tests, and that the linter passes. PRs with failing tests or tests that aren't in-depth enough won't be merged. This keeps the mock as stable as possible.
