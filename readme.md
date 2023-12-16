# rabbis-divisions

A ReactJS hook to get the country information.


## How to use it?

You can use the project in this way:

### Install
```bash
# with npm
npm install rabbis-divisions

# with yarn
yarn add rabbis-divisions
```

### Usage

- Import the package in your app:
```js
import {useDivisions} from 'rabbis-divisions';
```
- Get the country information from the hook:
```js
const {loading, error, country} = useDivisions('rangpur')'
```