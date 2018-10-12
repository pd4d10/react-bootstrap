import React from 'react'
import $c from 'classnames'
import * as types from './types'

interface ContainerProps extends types.CommonProps {
  fluid?: boolean
}
interface RowProps extends types.CommonProps {}

type OffsetValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type SizeValue = OffsetValue | 'auto'

type Offset = {
  sm?: OffsetValue
  md?: OffsetValue
  lg?: OffsetValue
  xl?: OffsetValue
}

type Size = {
  sm?: SizeValue
  md?: SizeValue
  lg?: SizeValue
  xl?: OffsetValue
}

interface ColProps extends types.CommonProps {
  size?: SizeValue | Size
  offset?: OffsetValue | Offset
  order?: number | 'last' | 'first'
}

export class Container extends React.Component<ContainerProps> {
  render() {
    const { fluid, className, ...rest } = this.props
    return (
      <div
        className={$c(className, fluid ? 'container-fluid' : 'container')}
        {...rest}
      />
    )
  }
}

export class Row extends React.Component<RowProps> {
  render() {
    const { className, ...rest } = this.props
    return <div className={$c('row', className)} {...rest} />
  }
}

const getClassNameFromSize = (value: SizeValue) => {
  if (value === 'auto') {
    return ''
  } else {
    return `-${value}`
  }
}

export class Col extends React.Component<ColProps> {
  render() {
    const { order, size = 'auto', offset, ...rest } = this.props
    let sizeClassName
    let offsetClassName

    if (size === 'auto') {
      sizeClassName = 'col'
    } else if (typeof size === 'number') {
      sizeClassName = `col-${size}`
    } else {
      const { sm, md, lg, xl } = size
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
      const { sm, md, lg, xl } = offset
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
          typeof order === 'undefined' || `order-${order}`,
        )}
        {...rest}
      />
    )
  }
}
