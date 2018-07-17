/* eslint import/no-webpack-loader-syntax: off */

export const BadgeExamples = [
  {
    name: 'Example',
    component: require('./example').default,
    code: require('!!raw-loader!./example.js'),
  },
  {
    name: 'Contextual variations',
    component: require('./theme').default,
    code: require('!!raw-loader!./theme.js'),
  },
  {
    name: 'Pill badges',
    component: require('./pill').default,
    code: require('!!raw-loader!./pill.js'),
  },
  {
    name: 'Links',
    component: require('./link').default,
    code: require('!!raw-loader!./link.js'),
  },
]
