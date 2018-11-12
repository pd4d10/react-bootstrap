### Example

```js
<>
  <ButtonGroup>
    <Button theme="secondary">Left</Button>
    <Button theme="secondary">Middle</Button>
    <Button theme="secondary">Right</Button>
  </ButtonGroup>
</>

<>
  <ButtonToolbar>
    <ButtonGroup bsStyle={{ mr: 2 }}>
      <Button theme="secondary">1</Button>
      <Button theme="secondary">2</Button>
      <Button theme="secondary">3</Button>
      <Button theme="secondary">4</Button>
    </ButtonGroup>
    <ButtonGroup bsStyle={{ mr: 2 }}>
      <Button theme="secondary">5</Button>
      <Button theme="secondary">6</Button>
      <Button theme="secondary">7</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button theme="secondary">8</Button>
    </ButtonGroup>
  </ButtonToolbar>
</>

<>
  <ButtonGroup>
    <Button theme="secondary" size="lg">Large</Button>
  </ButtonGroup>
</>
```

### Sizing

```js
<>
  <ButtonGroup bsStyle={{ mt: 1, mb: 1 }}>
    <Button size="lg" theme="secondary">Left</Button>
    <Button size="lg" theme="secondary">Middle</Button>
    <Button size="lg" theme="secondary">Right</Button>
  </ButtonGroup>
  <br />
  <ButtonGroup bsStyle={{ mt: 1, mb: 1 }}>
    <Button theme="secondary">Left</Button>
    <Button theme="secondary">Middle</Button>
    <Button theme="secondary">Right</Button>
  </ButtonGroup>
  <br />
  <ButtonGroup bsStyle={{ mt: 1, mb: 1 }}>
    <Button size="sm" theme="secondary">Left</Button>
    <Button size="sm" theme="secondary">Middle</Button>
    <Button size="sm" theme="secondary">Right</Button>
  </ButtonGroup>
</>
```
