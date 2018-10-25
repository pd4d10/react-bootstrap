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

export function createComponent<
  T extends keyof React.ReactHTML = 'div',
  K = {}
>(
  displayName: string,
  tag: T = 'div' as T,
  makeClassName: ((
    props: types.CommonProps<T> & K,
  ) => types.CommonProps<T>) = ({ ...rest }) => {
    rest.className = $c(rest.className, kebabCase(displayName))
    return rest
  },
) {
  const component: React.SFC<types.CommonProps<T> & K> = ({ ...rest }) => {
    rest = makeClassName(rest)
    const { bsStyle, render, ...newProps } = rest
    newProps.className = $c(newProps.className, getStyle(bsStyle))

    if (render) {
      return render({ className: newProps.className })
    } else {
      return React.createElement(tag, newProps)
    }
  }
  component.displayName = displayName
  return component
}