import React from 'react'
import { Button } from 'relaunch'

export const SizeExamples = () => (
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
