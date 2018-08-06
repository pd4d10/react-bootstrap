/* eslint import/no-webpack-loader-syntax: off */
import { ExampleComponent } from './example'

export const BreadcrumbExamples = [
  {
    name: 'Example',
    component: ExampleComponent,
    code: require('!!raw-loader!./example.js'),
  },
]
