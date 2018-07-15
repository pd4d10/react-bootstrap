import React from 'react'
import { Alert } from './relaunch'
import { alertTypes } from './utils'

export function AlertExample() {
  return (
    <div>
      {alertTypes.map(type => (
        <Alert type={type}>A simple {type} alert—check it out!</Alert>
      ))}
    </div>
  )
}
