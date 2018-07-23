/* eslint import/no-webpack-loader-syntax: off */

export const TableExamples = [
  {
    name: 'Example',
    component: require('./example').default,
    code: require('!!raw-loader!./example.js'),
  },
]
