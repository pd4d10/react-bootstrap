/* eslint import/no-webpack-loader-syntax: off */

export const ButtonExamples = [
  {
    name: 'Examples',
    component: require('./examples').default,
    code: require('!!raw-loader!./examples.js'),
  },
  {
    name: 'Outline buttons',
    component: require('./outline').default,
    code: require('!!raw-loader!./outline.js'),
  },
]
