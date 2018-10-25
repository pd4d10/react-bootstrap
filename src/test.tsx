import * as React from 'react'

type AttributesForTag = {
  [K in keyof React.ReactHTML]: React.ReactHTML[K] extends React.DetailedHTMLFactory<
    infer Attr,
    any
  >
    ? Attr
    : never
}

class Button<K extends keyof AttributesForTag> extends React.Component<
  { component: K } & AttributesForTag[K]
> {
  render() {
    const { component, ...rest } = this.props as any
    return React.createElement(component, rest)
  }
}

const x = <Button component="button" type="submit" />
