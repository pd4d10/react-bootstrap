/* eslint import/no-webpack-loader-syntax: off */

// Disable loader syntax check
// https://github.com/facebook/create-react-app/issues/1015#issuecomment-315324404

export const AlertExamples = [
  {
    name: 'Examples',
    component: require('./examples').default,
    code: require('!!raw-loader!./examples.js'),
  },
  {
    name: 'Link color',
    component: require('./link').default,
    code: require('!!raw-loader!./link.js'),
  },
  {
    name: 'Additional content',
    component: require('./additional').default,
    code: require('!!raw-loader!./additional'),
  },
  {
    name: 'Dismissing',
    component: require('./dismissing').default,
    code: require('!!raw-loader!./dismissing'),
  },
]
