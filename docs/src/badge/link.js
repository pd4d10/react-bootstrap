import React from 'react'
import { Badge } from 'relaunch'

export const LinkExample = () => (
  <div>
    <Badge theme="primary"><a href="#">Primary</a></Badge>{' '}
    <Badge theme="secondary"><a href="#">Secondary</a></Badge>{' '}
    <Badge theme="success"><a href="#">Success</a></Badge>{' '}
    <Badge theme="danger"><a href="#">Danger</a></Badge>{' '}
    <Badge theme="warning"><a href="#">Warning</a></Badge>{' '}
    <Badge theme="info"><a href="#">Info</a></Badge>{' '}
    <Badge theme="light"><a href="#">Light</a></Badge>{' '}
    <Badge theme="dark"><a href="#">Dark</a></Badge>
  </div>
)
