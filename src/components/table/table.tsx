import * as React from 'react'
import * as types from '../../types'
import { $c } from '../../utils'

export interface TableProps<T> extends types.CommonProps<'table'> {
  theme?: 'light' | 'dark'
  theadTheme?: 'light' | 'dark'
  striped?: boolean
  schema: {
    title: string
    key: string
    render: (item: T, index: number) => React.ReactElement<any>
  }[]
  rows: T[]
}

export class Table<T> extends React.Component<TableProps<T>> {
  render() {
    const { theme, theadTheme, schema, rows, ...rest } = this.props
    rest.className = $c(rest.className, 'table', theme && `table-${theme}`)
    return (
      <table {...rest}>
        <thead className={$c(theadTheme && `thead-${theadTheme}`)}>
          <tr>
            {schema.map(({ title, key }) => (
              <th key={key}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              {schema.map(({ key, render }) => {
                if (render) {
                  return <td>{render(item, index)}</td>
                } else if (typeof item[key] !== 'undefined') {
                  return <td>{item[key]}</td>
                } else {
                  throw new Error('')
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
