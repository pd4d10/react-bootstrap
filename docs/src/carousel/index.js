/* eslint import/no-webpack-loader-syntax: off */

export const CarouselExamples = [
  {
    name: 'Example',
    component: require('./example').default,
    code: require('!!raw-loader!./example.js'),
  },
]
