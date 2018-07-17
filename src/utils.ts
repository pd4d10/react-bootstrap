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

export function isUndefined(v: any) {
  return typeof v === 'undefined'
}

export function isNotUndefined(v: any) {
  return !isUndefined(v)
}

export function isFunction(v: any) {
  return typeof v === 'function'
}
