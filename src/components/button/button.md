### Themes

<!-- prettier-ignore -->
```js
<>
  <Button theme="primary">Primary</Button>{' '}
  <Button theme="secondary">Secondary</Button>{' '}
  <Button theme="success">Success</Button>{' '}
  <Button theme="info">Info</Button>{' '}
  <Button theme="warning">Warning</Button>{' '}
  <Button theme="danger">Danger</Button>{' '}
  <Button theme="light">Light</Button>{' '}
  <Button theme="dark">Dark</Button>{' '}
  <Button theme="link">Link</Button>
</>
```

### Custom render

<!-- prettier-ignore -->
```js
<>
  <Button
    theme="primary"
    render={props => <a href="javascript:" {...props}>Link</a>}
  />{' '}
  <Button
    theme="primary"
    render={props => <input type="button" value="Input" {...props} />}
  />{' '}
  <Button
    theme="primary"
    render={props => <input type="submit" value="Submit" {...props} />}
  />{' '}
  <Button
    theme="primary"
    render={props => <input type="reset" value="Reset" {...props} />}
  />
</>
```

### Outline buttons

<!-- prettier-ignore -->
```js
<>
  <Button outline theme="primary">Primary</Button>{' '}
  <Button outline theme="secondary">Secondary</Button>{' '}
  <Button outline theme="success">Success</Button>{' '}
  <Button outline theme="info">Info</Button>{' '}
  <Button outline theme="warning">Warning</Button>{' '}
  <Button outline theme="danger">Danger</Button>{' '}
  <Button outline theme="light">Light</Button>{' '}
  <Button outline theme="dark">Dark</Button>
</>
```

### Sizes

```js
<div>
  <Button size="lg" theme="primary">Large button</Button>{' '}
  <Button size="lg" theme="secondary">Large button</Button>{' '}
</div>

<div>
  <Button size="sm" theme="primary">Small button</Button>{' '}
  <Button size="sm" theme="secondary">Small button</Button>
</div>
```

### Block

<!-- prettier-ignore -->
```js
<>
  <Button size="lg" block theme="primary">Block level button</Button>
  <Button size="lg" block theme="secondary">Block level button</Button>
</>
```

### Active state

<!-- prettier-ignore -->
```js
<>
  <Button active theme="primary" size="lg">Primary link</Button>{' '}
  <Button active theme="secondary" size="lg">Link</Button>
</>
```

### Disabled state

<!-- prettier-ignore -->
```js
<>
  <Button disabled theme="primary" size="lg">Primary link</Button>{' '}
  <Button disabled theme="secondary" size="lg">Link</Button>
</>
```

### Loading state

<!-- prettier-ignore -->
```js
<>
  <Button loading disabled>Loading...</Button>{' '}
  <Button
    loading={state.loading}
    disabled={state.loading}
    onClick={() => {
      setState({ loading: true })
      setTimeout(() => {
        setState({ loading: false })
      }, 2000)
    }}
  >
    Trigger loading
  </Button>
</>
```
