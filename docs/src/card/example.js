import React from 'react'
import { Card, Button } from 'relaunch'

export default () => (
  <Card
    style={{ width: '18rem' }}
    topImage={() => <img src={null} alt="Card image cap" />}
    title="Card title"
    text="Some quick example text to build on the card title and make up the bulk of the card's content."
    extra={() => (
      <Button
        render={props => (
          <a href="#" {...props}>
            Go somewhere
          </a>
        )}
      />
    )}
  />
)
