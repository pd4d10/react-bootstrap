import React from 'react'

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

export type DisplayLevel = 1 | 2 | 3 | 4

type Margin = 0 | 1 | 2 | 3 | 4 | 5

export type BsStyle = {
  clearfix?: boolean
  text?: TextTheme
  display?: DisplayLevel
  lead?: boolean
  /**
   * margin top
   */
  mt?: Margin
  /**
   * margin bottom
   */
  mb?: Margin
  /**
   * margin left
   */
  ml?: Margin
  /**
   * margin right
   */
  mr?: Margin
  /**
   * margin left and right
   */
  mx?: Margin
  /**
   * margin top and bottom
   */
  my?: Margin
}

export type CommonProps<T = React.HTMLAttributes<HTMLElement>> = T & {
  bsStyle?: BsStyle
  render?: (props: { className: string }) => React.ReactNode
}
