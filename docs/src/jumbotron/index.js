/* eslint import/no-webpack-loader-syntax: off */

export const JumbotronExamples = [
  {
    component: require('./jumbotron').default,
    code: require('!!raw-loader!./jumbotron'),
  },
  {
    component: require('./fluid').default,
    code: require('!!raw-loader!./fluid'),
  },
]
