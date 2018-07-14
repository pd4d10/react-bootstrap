import React, { Component } from 'react'
import { Alert, Button } from './relaunch'
import './App.css'

const alertTypes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]
const ButtonTypes = [...alertTypes, 'link']

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {ButtonTypes.map(type => <Button type={type}>{type}</Button>)}
        </div>
        <div>
          {alertTypes.map(type => (
            <Button outline type={type}>
              {type}
            </Button>
          ))}
        </div>
        {alertTypes.map(type => (
          <Alert type={type}>A simple {type} alert—check it out!</Alert>
        ))}
      </div>
    )
  }
}

export default App
