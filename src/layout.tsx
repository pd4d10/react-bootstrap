import React from 'react'
import $c from 'classnames'
import { CommonProps, isUndefined, isNotUndefined } from './utils'

interface ContainerProps extends CommonProps {
  fluid?: boolean
}
interface RowProps extends CommonProps {}
type OffsetValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type SizeValue = OffsetValue | 'auto'
type Offset = {
  sm?: OffsetValue
  md?: OffsetValue
  lg?: OffsetValue
}
type Size = {
  sm?: SizeValue
  md?: SizeValue
  lg?: SizeValue
}
interface ColProps extends CommonProps {
  size?: SizeValue | Size
  offset?: OffsetValue | Offset
  order?: number | 'last' | 'first'
}

export const Container = ({ fluid, ...rest }: ContainerProps) => (
  <div className={`container${fluid ? '-fluid' : ''}`} {...rest} />
)

export const Row = ({ className, ...rest }: RowProps) => {
  return <div className={$c('row', className)} {...rest} />
}

const getClassNameFromSize = (value: SizeValue) => {
  if (value === 'auto') {
    return ''
  } else {
    return `-${value}`
  }
}

export const Col = ({ order, size = 'auto', offset, ...rest }: ColProps) => {
  let sizeClassName
  let offsetClassName

  if (size === 'auto') {
    sizeClassName = 'col'
  } else if (typeof size === 'number') {
    sizeClassName = `col-${size}`
  } else {
    const { sm, md, lg } = size
    sizeClassName = $c(
      sm && `col-sm${getClassNameFromSize(sm)}`,
      md && `col-md${getClassNameFromSize(md)}`,
      lg && `col-lg${getClassNameFromSize(lg)}`,
    )
  }

  if (!offset) {
    // Ignore
  } else if (typeof offset === 'number') {
    offsetClassName = `offset-${offset}`
  } else {
    const { sm, md, lg } = offset
    offsetClassName = $c(
      sm && `col-sm${getClassNameFromSize(sm)}`,
      md && `col-md${getClassNameFromSize(md)}`,
      lg && `col-lg${getClassNameFromSize(lg)}`,
    )
  }

  return (
    <div
      className={$c(
        'col',
        sizeClassName,
        offsetClassName,
        isNotUndefined(order) && `order-${order}`,
      )}
      {...rest}
    />
  )
}
