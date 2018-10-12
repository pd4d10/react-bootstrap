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

export type TextTheme = Theme | 'muted'

export type Direction = 'up' | 'down' | 'right' | 'left'

export type CommonProps<T = {}> = T & {
  // bsStyle?: {
  //   clearfix?: boolean
  //   text?: TextTheme
  // }
  style?: React.CSSProperties
  className?: string
}
