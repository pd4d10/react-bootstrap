export interface CommonProps {
  style?: React.CSSProperties
  className?: string
}

export type AlertType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type ButtonType = AlertType | 'link'
