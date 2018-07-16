/* eslint import/no-webpack-loader-syntax: off */

export const ButtonExamples = [
  {
    name: 'Examples',
    component: require('./examples').default,
    code: require('!!raw-loader!./examples'),
  },
  {
    name: 'Outline buttons',
    component: require('./outline').default,
    code: require('!!raw-loader!./outline'),
  },
  {
    name: 'Sizes',
    component: require('./size').default,
    code: require('!!raw-loader!./size'),
  },
]
