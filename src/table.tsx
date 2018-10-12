import React from 'react'
import $c from 'classnames'
import * as types from './types'

interface TableProps extends types.CommonProps {
  items: any[]
  renderItem: (item: any) => React.ReactNode
}

export class Table extends React.Component<TableProps> {
  render() {
    const { className, items } = this.props
    return (
      <table className={$c(className, 'table')}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
