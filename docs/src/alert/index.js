/* eslint import/no-webpack-loader-syntax: off */

// Disable loader syntax check
// https://github.com/facebook/create-react-app/issues/1015#issuecomment-315324404

export const AlertExamples = [
  {
    name: 'Examples',
    component: require('./examples').default,
    code: require('!!raw-loader!./examples.js'),
  },
  // {
  //   name: 'Link color',
  //   component: <div>sdf</div>,
  //   code:
  // },
]
