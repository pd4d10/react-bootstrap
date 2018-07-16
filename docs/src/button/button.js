import React from 'react'
import { alertTypes, buttonTypes, twoTypes } from './utils'
import { Button } from './relaunch'

export function ButtonExample() {
  return (
    <div>
      <div>{buttonTypes.map(type => <Button type={type}>{type}</Button>)}</div>
      <div>
        {alertTypes.map(type => (
          <Button outline type={type}>
            {type}
          </Button>
        ))}
      </div>
      <div>
        {twoTypes.map(type => (
          <Button type={type} size="lg">
            Large button
          </Button>
        ))}
      </div>
      <div>
        {twoTypes.map(type => (
          <Button type={type} size="sm">
            Small button
          </Button>
        ))}
      </div>
      <div>
        {twoTypes.map(type => (
          <Button type={type} size="lg" block>
            Block level button
          </Button>
        ))}
      </div>
      <div>
        <Button type="primary" size="lg" active>
          Primary link
        </Button>
        <Button type="secondary" size="lg" active>
          Link
        </Button>
      </div>
      <div>
        <Button type="primary" size="lg" disabled>
          Primary button
        </Button>
        <Button type="secondary" size="lg" disabled>
          Button
        </Button>
      </div>
    </div>
  )
}
