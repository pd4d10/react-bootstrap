### Themes

```js
<>
  <Alert theme="primary">A simple primary alert—check it out!</Alert>
  <Alert theme="secondary">A simple secondary alert—check it out!</Alert>
  <Alert theme="success">A simple success alert—check it out!</Alert>
  <Alert theme="danger">A simple danger alert—check it out!</Alert>
  <Alert theme="warning">A simple warning alert—check it out!</Alert>
  <Alert theme="info">A simple info alert—check it out!</Alert>
  <Alert theme="light">A simple light alert—check it out!</Alert>
  <Alert theme="dark">A simple dark alert—check it out!</Alert>
</>
```

### Notification

```js
<>
  <Button
    onClick={() => {
      Alert.notify({
        theme: 'primary',
        children: 'A simple notification',
        timeout: 3000,
      })
    }}
  >
    Show notification
  </Button>
</>
```

### Link

```js
<>
  <Alert theme="primary">
    A simple primary alert with{' '}
    <Alert.Link href="javascript:">an example link</Alert.Link>. Give it a click
    if you like.
  </Alert>
  <Alert theme="primary">
    A simple primary alert with{' '}
    <Alert.Link
      render={props => (
        <a {...props} to="/">
          a router link
        </a>
      )}
    />
    . Give it a click if you like.
  </Alert>
</>
```

### Additional content

```js
<>
  <Alert theme="success">
    <h4>Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.
    </p>
    <hr />
    <p style={{ marginBottom: 0 }}>
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </p>
  </Alert>
</>
```

### Dismissing

```js
<>
  <Alert
    dismissible
    theme="warning"
    onDismiss={() => {
      // Do something here
    }}
  >
    <strong>Holy guacamole!</strong> You should check in on some of those fields
    below.
  </Alert>
</>
```