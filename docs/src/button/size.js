import React from 'react'
import { Button } from 'relaunch'

export default () => (
  <div>
    <div>
      <Button theme="primary" size="lg">
        Large button
      </Button>{' '}
      <Button theme="secondary" size="lg">
        Large button
      </Button>
    </div>
    <div>
      <Button theme="primary" size="sm">
        Small button
      </Button>{' '}
      <Button theme="secondary" size="sm">
        Small button
      </Button>
    </div>
    <div>
      <Button theme="primary" size="lg" block>
        Block level button
      </Button>
      <Button theme="secondary" size="lg" block>
        Block level button
      </Button>
    </div>
    <div>
      <Button theme="primary" size="lg" active>
        Primary link
      </Button>{' '}
      <Button theme="secondary" size="lg" active>
        Link
      </Button>
    </div>
    <div>
      <Button theme="primary" size="lg" disabled>
        Primary button
      </Button>{' '}
      <Button theme="secondary" size="lg" disabled>
        Button
      </Button>
    </div>
  </div>
)
