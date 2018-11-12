### Example

```js
<>
  <Jumbotron>
    <h1 className={getStyle({ display: 4 })}>Hello, world!</h1>
    <p className={getStyle({ lead: true })}>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr className={getStyle({ my: 4 })} />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <Button theme="primary" size="lg">
      Learn more
    </Button>
  </Jumbotron>
</>
```

### Fluid

```js
<>
  <Jumbotron fluid>
    <Container>
      <h1 className={getStyle({ display: 4 })}>Fluid jumbotron</h1>
      <p className={getStyle({ lead: true })}>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </Container>
  </Jumbotron>
</>
```
