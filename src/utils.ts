import * as React from 'react'
import { render } from 'react-dom'
import * as types from './types'

// class name helper
export function $c(...classes: (string | boolean | undefined)[]) {
  return classes.filter(c => c).join(' ')
}

export function include<T>(item: T, arr: T[]) {
  return arr.indexOf(item) !== -1
}

// ButtonGroup -> button-group
function kebabCase(str: string) {
  return str.replace(/(?<!^)([A-Z])/g, '-$1').toLowerCase()
}

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
  getClassNameFromProps: string | ((props: K) => string) = () =>
    kebabCase(displayName),
) {
  const component: React.SFC<types.CommonProps<T> & K> = props => {
    const { bsStyle, render, ...rest } = props

    rest.className = $c(
      rest.className,
      getStyle(bsStyle),
      typeof getClassNameFromProps === 'function'
        ? getClassNameFromProps(props)
        : getClassNameFromProps,
    )

    if (props.component) {
      return React.createElement(
        props.component,
        { className: rest.className },
        props.children,
      )
    } else if (render) {
      return render({ className: rest.className })
    } else {
      return React.createElement(tag, rest)
    }
  }
  component.displayName = displayName
  return component
}

// Fake router link for documents
// export const Link = (props: React.AnchorHTMLAttributes<HTMLElement>) => (
//   <a
//     href="javascript:"
//     {...props}
//     onClick={e => {
//       props.onClick && props.onClick(e)
//       alert('Link is clicked')
//     }}
//   />
// )
