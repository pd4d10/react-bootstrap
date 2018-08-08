import React from 'react'
import { Badge, Button } from 'relaunch'

export const Example = () => (
  <div>
    <Button theme="primary">Notifications <Badge theme="light">4</Badge></Button>{' '}
    <Button theme="primary">Profile <Badge theme="light">9</Badge></Button>
  </div>
)
