import * as React from 'react'
import * as types from '../../types'
import { $c } from '../../utils'

type TableProps = types.CommonProps<'table'> & {
  items: any[]
  renderItem: (item: any) => React.ReactNode
}

export class Table extends React.Component<TableProps> {
  render() {
    const { items, render, ...rest } = this.props
    rest.className = $c(rest.className, 'table')
    if (render) {
      return render({ className: rest.className })
    }
    return (
      <table {...rest}>
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
