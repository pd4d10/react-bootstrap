### Example

```js
initialState = { visible: false }
;<>
  <div>
    <Button
      onClick={() => {
        setState(state => ({ visible: !state.visible }))
      }}
    >
      Toggle
    </Button>
    <Modal
      visible={state.visible}
      body={<div>Woohoo, you're reading this text in a modal!</div>}
      onFinish={() => {
        setState(state => ({ visible: !state.visible }))
      }}
      onCancel={() => {
        setState(state => ({ visible: !state.visible }))
      }}
    />
  </div>
</>
```

### Confirm

```js
initialState = { result: '' }
;<>
  <Button
    onClick={() => {
      Modal.confirm({
        title: 'Confirm',
        content: 'Are you sure',
        onFinish: () => {
          setState({ result: 'finish' })
        },
        onCancel: () => {
          setState({ result: 'cancel' })
        },
      })
    }}
  >
    Confirm
  </Button>{' '}
  <span>{state.result ? `You click ` + state.result : 'Click the button'}</span>
</>
```
