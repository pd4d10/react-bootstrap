import React from 'react'

export const Link = props => (
  <a
    href="javascript:"
    {...props}
    onClick={e => {
      props.onClick && props.onClick(e)
      alert('Link is clicked')
    }}
  />
)
