import React from 'react'
import { render } from 'react-dom'
import $c from 'classnames'
import { kebabCase } from 'lodash-es'
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
    'bg',
    'border',
  ]

  prefixes.forEach(prefix => {
    if (bs[prefix]) classes.push(prefix + '-' + bs[prefix])
  })

  return classes.join(' ')
}

export function createComponent<T extends keyof React.ReactHTML = 'div'>(
  displayName: string,
  tag: T = 'div' as T,
  className = kebabCase(displayName),
) {
  const component: React.SFC<types.CommonProps<T>> = props => {
    const { bsStyle, render, ...rest } = props
    rest.className = $c(rest.className, className, getStyle(bsStyle))
    if (render) {
      return render({ className: rest.className })
    }
    return React.createElement(tag, rest)
  }
  component.displayName = displayName
  return component
}
