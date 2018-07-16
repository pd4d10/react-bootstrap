import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, AlertTheme } from './utils'

interface BadgeProps extends CommonProps {
  theme: AlertTheme
  pill?: boolean
}

export function Badge({ theme = 'primary', pill, ...rest }: BadgeProps) {
  rest.className = $c(
    rest.className,
    'badge',
    `badge-${theme}`,
    pill && 'badge-pill',
  )
  return <span {...rest} />
}
