import { render } from 'react-dom'
export interface CommonProps {
  style?: React.CSSProperties
  className?: string
}

export type Size = 'lg' | 'sm'

export type Theme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type ButtonTheme = Theme | 'link'

export type Direction = 'up' | 'down' | 'right' | 'left'

export function isUndefined(v: any) {
  return typeof v === 'undefined'
}

export function isNotUndefined(v: any) {
  return !isUndefined(v)
}

export function isFunction(v: any) {
  return typeof v === 'function'
}

export function fill(length: number) {
  const arr = Array(length)
  for (let i = 0; i < length; i++) {
    arr[i] = 0
  }
  return arr
}

// https://stackoverflow.com/a/50677584
export type Arg0<T> = T extends (arg0: infer U, ...args: any[]) => any ? U : any

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
