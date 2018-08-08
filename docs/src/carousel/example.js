import React from 'react'
import { Carousel } from 'relaunch'

export const Example = () => (
  <Carousel
    items={[
      require('./first.svg'),
      require('./second.svg'),
      require('./third.svg'),
    ]}
  />
)
