import React from 'react'
import { Alert } from 'relaunch'

export const Example = () => (
  <Alert
    closable
    theme="warning"
    onClose={() => {
      alert('Close button clicked')
    }}
  >
    <strong>Holy guacamole!</strong> You should check in on some of those fields
    below.
  </Alert>
)
