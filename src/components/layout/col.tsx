import * as React from 'react'
import * as types from '../../types'
import { $c, createComponent } from '../../utils'

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
