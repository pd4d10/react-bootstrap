import { render } from 'react-dom'
import * as types from './types'

export function fill(length: number) {
  const arr = Array(length)
  for (let i = 0; i < length; i++) {
    arr[i] = 0
  }
  return arr
}

export function renderToBody(
  ele: React.ReactElement<any>,
  div: HTMLDivElement,
) {
  document.body.appendChild(div)
  render(ele, div)
  return {
    node: div,
    dispose() {
      document.body.removeChild(div)
    },
  }
}

export function getStyle(bs?: types.BsStyle) {
  if (!bs) return

  const classes: string[] = []

  if (bs.clearfix) classes.push('clearfix')
  if (bs.lead) classes.push('lead')

  const prefixes: (keyof types.BsStyle)[] = [
    'display',
    'text',
    'mt',
    'mb',
    'ml',
    'mr',
    'mx',
    'my',
  ]

  prefixes.forEach(prefix => {
    if (bs[prefix]) classes.push(prefix + '-' + bs[prefix])
  })

  return classes.join(' ')
}
