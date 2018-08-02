/* eslint import/no-webpack-loader-syntax: off */

export const DropdownExamples = [
  {
    name: 'Example',
    component: require('./example').default,
    code: require('!!raw-loader!./example.js'),
  },
]
