/* eslint import/no-webpack-loader-syntax: off */
import { Example } from './example'
import { CounterExample } from './counter'
import { PillExample } from './pill'
import { ThemeExample } from './theme'
import { LinkExample } from './link'

export const BadgeExamples = [
  {
    name: 'Example',
    description:
      'Badges scale to match the size of the immediate parent element.',
    component: Example,
    code: require('!!raw-loader!./example.js'),
  },
  {
    description:
      'Badges can be used as part of links or buttons to provide a counter.',
    component: CounterExample,
    code: require('!!raw-loader!./counter.js'),
  },
  {
    name: 'Contextual variations',
    description: 'Change the appearance of a badge.',
    component: ThemeExample,
    code: require('!!raw-loader!./theme.js'),
  },
  {
    name: 'Pill badges',
    description: 'Make badges more rounded.',
    component: PillExample,
    code: require('!!raw-loader!./pill.js'),
  },
  {
    name: 'Links',
    component: LinkExample,
    code: require('!!raw-loader!./link.js'),
  },
]
